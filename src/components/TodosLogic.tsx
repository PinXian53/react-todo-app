import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";
import {TodoItemProps} from "@/components/TodoItem.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {v4 as uuidV4} from "uuid";

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
                submitEvent={inputTodoSubmitEvent}
                changeEvent={inputTodoChangeEvent}/>
            <span>{message}</span>
            <TodosList
                todosPropsList={todos}
                changeEvent={todoItemChangeEvent}
                deleteEvent={todoItemDeleteEvent}
            />
        </div>
    )
}

export default TodosLogic;