import {FaPlusCircle} from "react-icons/fa";
import {useTodosStore} from "@/stores/TodoStore.ts";
import {ChangeEvent, FormEvent, useState} from "react";

const InputTodo = () => {

    const addTodoItem = useTodosStore((state) => state.addTodoItem);
    const [message, setMessage] = useState('');
    const [inputTitle, setInputTitle] = useState('');

    const submitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = (e.currentTarget.elements[0] as HTMLInputElement).value.trim();
        if (title) {
            addTodoItem(title);
            setInputTitle('');
            setMessage('');
        } else {
            setMessage('Please add item.');
        }
    };
    const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
    };

    return (
        <>
            <form onSubmit={submitEvent} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    value={inputTitle}
                    onChange={changeEvent}
                />
                <button className="input-submit">
                    <FaPlusCircle
                        color="#5e5e5e"
                        size="20px"
                        className="submit-icon"
                    />
                </button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    );
};

export default InputTodo;