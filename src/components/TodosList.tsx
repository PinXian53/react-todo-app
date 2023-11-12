import React from "react";
import TodoItem, {TodoItemProps} from "@/components/TodoItem.tsx";
import {TodoItemEvents} from "@/components/TodosLogic.tsx";

type TodosPropsObject = React.PropsWithChildren<{
    todosPropsList: Array<TodoItemProps>
}>

const TodosList: React.FC<TodosPropsObject & TodoItemEvents> = ({todosPropsList, changeEvent, deleteEvent}) => {
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

