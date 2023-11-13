import Header from "@/components/Header.tsx";
import TodosLogic from "@/components/TodosLogic.tsx";

const TodoApp = () => {
    return (
        <div className="wrapper">
            <div className="todos">
                <Header />
                <TodosLogic />
            </div>
        </div>
    );
};

export default TodoApp;