import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";

const TodosLogic = () => {
    return (
        <div>
            <InputTodo />
            <TodosList />
        </div>
    )
}

export default TodosLogic;