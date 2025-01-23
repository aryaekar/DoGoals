import { useOutletContext, useParams } from "react-router-dom"
import ShowTodos from "../components/ShowTodos";

const GroupTaskPage = () => {
    const {todos,getTodos,groups}=useOutletContext();
    const {groupid}=useParams();
    return (
        <div>
            <div className="m-3 p-1 text-lg font-medium">{groups.find(group=>group._id===groupid).groupname}</div>
            {todos&&groups?(<ShowTodos todos={todos.filter((todo)=>(todo.group===groupid))} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
        </div>
    )
}

export default GroupTaskPage