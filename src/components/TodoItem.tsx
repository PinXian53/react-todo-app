import React, {CSSProperties, FC, useState} from "react";
import styles from '@/styles/TodoItem.module.scss';

export type TodoItemProps = {
    id: string
    title: string
    completed: boolean
};

export type TodoItemEvents = {
    changeEvent: (value: string) => void
    deleteEvent: (value: string) => void
    updateEvent: (updatedTitle: string, id: string) => void
}

const TodoItem: FC<TodoItemProps & TodoItemEvents> = ({
                                                          id,
                                                          title,
                                                          completed,
                                                          changeEvent,
                                                          deleteEvent,
                                                          updateEvent
                                                      }) => {

    const [editing, setEditing] = useState(false);

    const completedStyle: CSSProperties = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    const hideStyle: CSSProperties = {
        display: 'none',
    };

    const defaultStyle: CSSProperties = {};

    const handleEditing = () => {
        setEditing(true);
    };

    const handleUpdatedDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };

    return (
        <li className={styles.item} key={id}>
            <div
                className={styles.content}
                style={editing ? hideStyle : defaultStyle}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => changeEvent(id)}
                />
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => deleteEvent(id)}>Delete</button>
                <span style={completed ? completedStyle : undefined}>
                  {title}
                </span>
            </div>
            <input
                type="text"
                style={editing ? defaultStyle : hideStyle}
                value={title}
                className={styles.textInput}
                onChange={(e) => updateEvent(e.target.value, id)}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
};

export default TodoItem;