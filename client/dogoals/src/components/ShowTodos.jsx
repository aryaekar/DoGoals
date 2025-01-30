import TodoCard from "./TodoCard";
import { useState } from "react";
const ShowTodos = ({refreshTodos,todos,groups}) => {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const API_URL=process.env.REACT_APP_SERVER_URL;

    async function deleteTodo(id){
        // console.log(id);
        try{
            const res=await fetch(`${API_URL}/api/todos/${id}`,{
                method:"DELETE"
            });
            if (!res.ok) {
                console.log("Error in deleting data");
            }
            refreshTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function updateTodo(id,stat){
        // console.log(id);
        try{
            const res=await fetch(`http://localhost:8000/api/todos/${id}`,{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({status:stat})
            });
            if (!res.ok) {
                console.log("Error in deleting data");
            }
            refreshTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {/* {console.log(todos)} */}
            {
                todos&&todos.length>0?todos.map((todo) => (
                    <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} groups={groups} updateTodo={updateTodo} openDropdownId={openDropdownId}
                    setOpenDropdownId={setOpenDropdownId}/>
                )):(<div className="text-center text-red-500">No Tasks Yet</div>)
            }
        </div>
    )
}

export default ShowTodos;