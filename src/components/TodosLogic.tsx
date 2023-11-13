import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";
import {TodoItemProps} from "@/components/TodoItem.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {v4 as uuidV4} from "uuid";

const todosLocalStorageKey = "todos";

const TodosLogic = () => {

    const [todos, setTodos] = useState<TodoItemProps[]>(getInitialTodos());

    function getInitialTodos(): TodoItemProps[] {
        const value = localStorage.getItem(todosLocalStorageKey);
        return value === null ? [] : JSON.parse(value);
    }

    useEffect(() => {
        const value = JSON.stringify(todos);
        localStorage.setItem(todosLocalStorageKey, value);
    }, [todos]);

    const todoItemChangeEvent = (currentId: string) => {
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

    const todoItemDeleteEvent = (currentId: string) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== currentId;
            }),
        ]);
    };

    const todoItemUpdateEvent = (updatedTitle: string, id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        );
    };

    const [inputTodoTitle, setInputTodoTitle] = useState('');

    const inputTodoSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = (e.currentTarget.elements[0] as HTMLInputElement).value.trim();
        if (title) {
            addTodo(title);
            setInputTodoTitle('');
            setMessage('');
        } else {
            setMessage('Please add item.');
        }
    };

    const addTodo = (title: string) => {
        const newTodo = {
            id: uuidV4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const inputTodoChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTodoTitle(e.target.value);
    };

    const [message, setMessage] = useState('');

    return (
        <div>
            <InputTodo
                title={inputTodoTitle}
                message={message}
                submitEvent={inputTodoSubmitEvent}
                changeEvent={inputTodoChangeEvent}/>
            <TodosList
                todosPropsList={todos}
                changeEvent={todoItemChangeEvent}
                deleteEvent={todoItemDeleteEvent}
                updateEvent={todoItemUpdateEvent}
            />
        </div>
    )
}

export default TodosLogic;