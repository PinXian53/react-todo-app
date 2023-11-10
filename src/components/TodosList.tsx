import React from "react";
import TodoItem, {TodoItemProps} from "@/components/TodoItem.tsx";

type TodosPropsObject = React.PropsWithChildren<{
    todosPropsList: Array<TodoItemProps>
}>

const TodosList = ({todosPropsList}: TodosPropsObject) => {
    return (
        <ul>
            {todosPropsList.map((todosProps) => (
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

