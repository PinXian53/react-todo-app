import {FC} from "react";

export type TodoItemProps = {
    id: string
    title: string
    completed: boolean
};

export type TodoItemEvents = {
    changeEvent: (value: string) => void
    deleteEvent: (value: string) => void
}

const TodoItem: FC<TodoItemProps & TodoItemEvents> = ({id, title, completed, changeEvent, deleteEvent}) => {

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