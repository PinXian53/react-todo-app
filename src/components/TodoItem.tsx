import React from "react";
import {TodosEvents} from "@/components/TodosLogic.tsx";

export type TodoItemProps = {
    id: number
    title: string
    completed: boolean
};

const TodoItem: React.FC<TodoItemProps & TodosEvents> = ({id, title, completed, changeEvent, deleteEvent}) => {

    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => changeEvent(id)}
            />
            <button onClick={() => deleteEvent(id)}>Delete</button>
            {title}
        </li>
    );
};
export default TodoItem;