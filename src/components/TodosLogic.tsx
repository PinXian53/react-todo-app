import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";
import {TodoItemProps} from "@/components/TodoItem.tsx";
import React, {useState} from "react";

export type TodosEvents = React.PropsWithChildren<{
    changeEvent: (value: number) => void
    deleteEvent: (value: number) => void
}>


const TodosLogic = () => {

    const [todos, setTodos] = useState<TodoItemProps[]>([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ]);

    const changeEvent = (currentId: number) => {
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

    const deleteEvent = (currentId: number) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== currentId;
            }),
        ]);
    };

    return (
        <div>
            <InputTodo/>
            <TodosList
                todosPropsList={todos}
                changeEvent={changeEvent}
                deleteEvent={deleteEvent}
            />
        </div>
    )
}
export default TodosLogic;