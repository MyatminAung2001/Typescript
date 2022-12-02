class Department {
    static fiscalYear = 2020;
    // private readonly id: string
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {
            name: name
        }
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class itDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class financeDepartment extends Department {

    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found!');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Something went wrong')
        }
        this.addReports(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Finance');
        this.lastReport = reports[0];
    }

    describe() {
        console.log('Finance Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Rand') {
            return;
        }
        this.employees.push(name);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const IT = new itDepartment('d1', ['Rand']);
IT.addEmployee('Rand');
IT.addEmployee('Myatmin Aung');
// finance.employees[2] = 'Alex';
IT.describe();
IT.printEmployeeInfo();
console.log(IT);

const Finance = new financeDepartment('d2', []);
Finance.mostRecentReport = '';
Finance.addReports('Some Reports');
console.log(Finance.mostRecentReport);
Finance.addEmployee('Rand')
Finance.addEmployee('Myatmin Aung')
Finance.printReports();
Finance.printEmployeeInfo();