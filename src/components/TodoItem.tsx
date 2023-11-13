import {CSSProperties, FC} from "react";
import styles from '@/styles/TodoItem.module.scss';

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
    const completedStyle: CSSProperties = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };
    return (
        <li className={styles.item} key={id}>
            <div className={styles.content}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => changeEvent(id)}
                />
                <button onClick={() => deleteEvent(id)}>Delete</button>
                <span style={completed ? completedStyle : undefined}>
                  {title}
                </span>
            </div>
        </li>
    );
};

export default TodoItem;