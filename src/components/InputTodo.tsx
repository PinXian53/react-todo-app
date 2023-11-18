import {ChangeEvent, FC, FormEvent} from 'react';
import {FaPlusCircle} from "react-icons/fa";

export type InputTodoProps = {
    title: string
    message: string
};

export type InputTodoEvents = {
    submitEvent: (changeEvent: FormEvent<HTMLFormElement>) => void
    changeEvent: (changeEvent: ChangeEvent<HTMLInputElement>) => void
}

const InputTodo: FC<InputTodoProps & InputTodoEvents> = ({title, message, submitEvent, changeEvent}) => {

    return (
        <>
            <form onSubmit={submitEvent} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    value={title}
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