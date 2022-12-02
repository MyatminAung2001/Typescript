const Logger = (logString: string) => {
    // Decorator Factories
    console.log('Logger Factory');
    return (constructor: Function) => {
        console.log(logString);
        console.log(constructor);
    }
};

const WithTemplate = (template: string, hookID: string) => {
    console.log('Template Factory');
    return <T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) => {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering Template');
                const hookEl = document.getElementById(hookID);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
};

@Logger('Logging')
@WithTemplate('<h1>Person Object<h1/>', 'app')
class Person {
    name = "Rand";

    constructor() {
        console.log('Creating a person');
    }
};

const person = new Person();
console.log(person);

// ---

const Log = (target: any, propetyName: string | Symbol) => {
    console.log('Propety Decorator');
    console.log(target, propetyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log4 = (target: any, name: string | Symbol, position: number) => {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid Price')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book One', 10);
const p2 = new Product('Book Two', 25);

// ---
// Autobind
const AutoBind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFun = originalMethod.bind(this);
            return boundFun;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!'

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer();

const btn = document.querySelector('button')!;
btn.addEventListener('click', printer.showMessage);

// ---
// Validation with Decorators
interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[] // ['require', 'positive']
    }
}

const registerValidator: ValidatorConfig = {};

const Required = (target: any, propName: string) => {
    registerValidator[target.constructor.name] = {
        ...registerValidator[target.constructor.name],
        [propName]: ['required']
    }
}

const PositiveNumber = (target: any, propName: string) => {
    registerValidator[target.constructor.name] = {
        ...registerValidator[target.constructor.name],
        [propName]: ['positive']
    }
}

const validate = (obj: any) => {
    const objValidatorConfig = registerValidator[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Something wrong');
        return;
    }
    console.log(createdCourse);
});