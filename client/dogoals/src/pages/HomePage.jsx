import { useState } from "react";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const getTodos=async()=> {
        try {
            const res = await fetch("http://localhost:8000/api/todos");
            const result = await res.json();
            setTodos(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    const postTodo = async (e) => {
        e.preventDefault();
        try {
            const value = e.target.title.value;
            if(!value||value===""){
                console.log("Invalid data");
                return;
            }
            const res = await fetch("http://localhost:8000/api/todos",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ title: value })
                });
            if (!res.ok) {
                console.log("Error in sending data");
            }
            getTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function deleteTodo(id){
        // console.log(id);
        try{
            const res=await fetch(`http://localhost:8000/api/todos/${id}`,{
                method:"DELETE"
            });
            if (!res.ok) {
                console.log("Error in deleting data");
            }
            getTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Home</h1>
            <form onSubmit={postTodo}>
                Title:<input type="text" id="title"></input>
                <input type="submit" id="submit" />
            </form>
            <button onClick={() => getTodos()}>getTodos</button>
            {
                todos.map((todo) => (
                    <div key={todo._id}>
                        {todo.title}
                        <button onClick={()=>deleteTodo(todo._id)}>X</button>
                    </div>
                ))
            }
        </>
    );
}

export default Home;