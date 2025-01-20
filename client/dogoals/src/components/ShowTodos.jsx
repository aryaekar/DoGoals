import TodoCard from "./TodoCard";
const ShowTodos = ({refreshTodos,todos,groups}) => {

    async function deleteTodo(id){
        // console.log(id);
        try{
            const res=await fetch(`http://localhost:8000/api/todos/${id}`,{
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
            {/* <button onClick={() => refreshTodos()}>refreshTodos</button> */}
            {
                todos.map((todo) => (
                    <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} groups={groups} updateTodo={updateTodo}/>
                ))
            }
        </div>
    )
}

export default ShowTodos;