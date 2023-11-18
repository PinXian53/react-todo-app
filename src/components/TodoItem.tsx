import React, {CSSProperties, FC, useState} from "react";
import styles from '@/styles/TodoItem.module.scss';
import {AiFillEdit} from "react-icons/ai";
import {FaTrash} from "react-icons/fa";
import {TodoItemProps, useTodosStore} from "@/stores/TodoStore.ts";

const TodoItem: FC<TodoItemProps> = ({id, title, completed}) => {

    const handleChange = useTodosStore((state) => state.handleChange);
    const delTodo = useTodosStore((state) => state.delTodo);
    const setUpdate = useTodosStore((state) => state.setUpdate);

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

    const iconStyle: CSSProperties = {
        color: "#5e5e5e",
        fontSize: "16px"
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
                    onChange={() => handleChange(id)}
                />
                <button onClick={handleEditing}>
                    <AiFillEdit style={iconStyle}/>
                </button>
                <button onClick={() => delTodo(id)}>
                    <FaTrash style={iconStyle}/>
                </button>
                <span style={completed ? completedStyle : undefined}>
                  {title}
                </span>
            </div>
            <input
                type="text"
                style={editing ? defaultStyle : hideStyle}
                value={title}
                className={styles.textInput}
                onChange={(e) => setUpdate(e.target.value, id)}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
};

export default TodoItem;