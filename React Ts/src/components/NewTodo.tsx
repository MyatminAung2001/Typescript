import React, { useRef, useEffect } from 'react';

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHndler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHndler}>
            <div className="form-control">
                <label htmlFor="todo-text">
                    Todo Text
                </label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
};

export default NewTodo;