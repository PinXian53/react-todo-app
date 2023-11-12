import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";
import {TodoItemProps} from "@/components/TodoItem.tsx";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {v4 as uuidV4} from "uuid";

export type TodoItemEvents = React.PropsWithChildren<{
    changeEvent: (value: string) => void
    deleteEvent: (value: string) => void
}>

export type AddTodoEvents = React.PropsWithChildren<{
    addTodoEvent: (value: string) => void
    handleSubmit: (changeEvent: FormEvent<HTMLFormElement>) => void
    handleChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void
}>


const TodosLogic = () => {

    const [todos, setTodos] = useState<TodoItemProps[]>([
        {
            id: uuidV4(),
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: uuidV4(),
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: uuidV4(),
            title: 'Deploy to live server',
            completed: false,
        },
    ]);

    const changeEvent = (currentId: string) => {
        setTodos((prevState: TodoItemProps[]) => {
                return prevState.map((todo: TodoItemProps) => {
                    if (todo.id === currentId) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    }
                    return todo;
                });
            }
        );
    };

    const deleteEvent = (currentId: string) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== currentId;
            }),
        ]);
    };

    const [addTodoTitle, setAddTodoTitle] = useState('');

    const addTodoEvent = (title: string) => {
        const newTodo = {
            id: uuidV4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = (e.currentTarget.elements[0] as HTMLInputElement).value.trim();
        if (title) {
            addTodoEvent(title);
            setAddTodoTitle('');
            setMessage('');
        } else {
            setMessage('Please add item.');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTodoTitle(e.target.value);
    };

    const [message, setMessage] = useState('');

    return (
        <div>
            <InputTodo
                title={addTodoTitle}
                addTodoEvent={addTodoEvent}
                handleSubmit={handleSubmit}
                handleChange={handleChange}/>
            <span>{message}</span>
            <TodosList
                todosPropsList={todos}
                changeEvent={changeEvent}
                deleteEvent={deleteEvent}
            />
        </div>
    )
}
export default TodosLogic;