import {FC} from "react";
import TodoItem, {TodoItemEvents, TodoItemProps} from "@/components/TodoItem.tsx";

type TodosPropsObject = {
    todosPropsList: Array<TodoItemProps>
}

const TodosList: FC<TodosPropsObject & TodoItemEvents> = ({todosPropsList, changeEvent, deleteEvent}) => {
    return (
        <ul>
            {todosPropsList.map((todosProps) => (
                <TodoItem key={todosProps.id}
                          id={todosProps.id}
                          title={todosProps.title}
                          completed={todosProps.completed}
                          changeEvent={changeEvent}
                          deleteEvent={deleteEvent}
                />
            ))}
        </ul>
    );
};

export default TodosList;