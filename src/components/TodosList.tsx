import TodoItem from "@/components/TodoItem.tsx";
import {useTodosStore} from "@/stores/TodoStore.ts";

const TodosList = () => {
    const todos = useTodosStore((state) => state.todos);
    return (
        <ul>
            {todos.map((todosProps) => (
                <TodoItem key={todosProps.id}
                          id={todosProps.id}
                          title={todosProps.title}
                          completed={todosProps.completed}
                />
            ))}
        </ul>
    );
};

export default TodosList;