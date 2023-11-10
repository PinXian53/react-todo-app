import InputTodo from "@/components/InputTodo.tsx";
import TodosList from "@/components/TodosList.tsx";
import {TodoItemProps} from "@/components/TodoItem.tsx";


const TodosLogic = () => {

    const todos: TodoItemProps[] = [
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
    ];


    return (
        <div>
            <InputTodo/>
            <TodosList todosPropsList={todos}/>
        </div>
    )
}
export default TodosLogic;