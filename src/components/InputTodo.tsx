import {ChangeEvent, FC, FormEvent} from 'react';

export type InputTodoProps = {
    title: string
};

export type InputTodoEvents = {
    submitEvent: (changeEvent: FormEvent<HTMLFormElement>) => void
    changeEvent: (changeEvent: ChangeEvent<HTMLInputElement>) => void
}

const InputTodo: FC<InputTodoProps & InputTodoEvents> = ({title, submitEvent, changeEvent}) => {

    return (
        <form onSubmit={submitEvent}>
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={changeEvent}
            />
            <button>Submit</button>
        </form>
    );
};

export default InputTodo;