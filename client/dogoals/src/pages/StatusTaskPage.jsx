import { useOutletContext, useParams } from "react-router-dom"
import ShowTodos from "../components/ShowTodos";

const StatusTaskPage = () => {
    const {todos,getTodos,groups}=useOutletContext();
    const {status}=useParams();
    return (
        <div>
            <div className="m-3 p-1 text-lg font-medium">{status}</div>
            {todos&&groups?(<ShowTodos todos={todos.filter((todo)=>(todo.status===status))} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
        </div>
    )
}

export default StatusTaskPage