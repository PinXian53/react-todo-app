import React from 'react';
import {AddTodoEvents} from "@/components/TodosLogic.tsx";

export type InputTodoProps = {
    title: string
};
const InputTodo: React.FC<InputTodoProps & AddTodoEvents> = ({title, handleSubmit, handleChange}) => {

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
};
export default InputTodo;