import {v4 as uuidV4} from 'uuid';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {createWithEqualityFn} from "zustand/traditional";

interface TodoState {
    todos: TodoItemProps[]
    addTodoItem: (title: string) => void
    delTodo: (id: string) => void
    handleChange: (id: string) => void
    setUpdate: (updatedTitle: string, id: string) => void
}

export type TodoItemProps = {
    id: string
    title: string
    completed: boolean
};

export const useTodosStore = createWithEqualityFn<TodoState>()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodoItem: (title: string) => {
                    const newTodo: TodoItemProps = {
                        id: uuidV4(),
                        title: title,
                        completed: false,
                    };
                    set((state) => ({
                        todos: [...state.todos, newTodo],
                    }));
                },
                delTodo: (id: string) => {
                    set((state) => ({
                        todos: state.todos.filter((todo) => {
                            return todo.id !== id;
                        }),
                    }));
                },
                handleChange: (id: string) => {
                    set((state) => ({
                        todos: state.todos.map((todo) => {
                            if (todo.id === id) {
                                return {
                                    ...todo,
                                    completed: !todo.completed,
                                };
                            }
                            return todo;
                        }),
                    }));
                },
                setUpdate: (updatedTitle: string, id: string) => {
                    set((state) => ({
                        todos: state.todos.map((todo) => {
                            if (todo.id === id) {
                                todo.title = updatedTitle;
                            }
                            return todo;
                        }),
                    }));
                },
            }),
            {
                name: 'todos',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);