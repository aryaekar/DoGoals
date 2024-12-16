import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import ShowTodos from "./ShowTodos";

const TodoManager = ({ userDetails }) => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const res = await fetch(`http://localhost:8000/api/todos/${userDetails._id}`);
            const result = await res.json();
            setTodos(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <CreateTodo userDetails={userDetails} refreshTodos={getTodos}/>
            <ShowTodos refreshTodos={getTodos} todos={todos} />
        </div>
    )
}

export default TodoManager;