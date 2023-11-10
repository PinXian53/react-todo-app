export type TodoItemProps = {
    id: number;
    title: string;
    completed: boolean
};

const TodoItem = ({id, title, completed}: TodoItemProps) => {
    return <li key={id}>{title} {completed}</li>;
};
export default TodoItem;