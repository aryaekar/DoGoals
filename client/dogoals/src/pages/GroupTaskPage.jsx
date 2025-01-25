import { useOutletContext, useParams } from "react-router-dom"
import ShowTodos from "../components/ShowTodos";
import CreateTodo from "../components/CreateTodo";
import { useState } from "react";

const GroupTaskPage = () => {
    const {todos,getTodos,groups,user}=useOutletContext();
    const {groupid}=useParams();
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <div className="p-1 text-lg font-medium">{groups.find(group=>group._id===groupid).groupname}</div>
            <div className="flex justify-end px-2 my-2">
                <button onClick={() => setShowForm(true)} className="h-8 px-2 text-sm bg-green-500 text-white rounded-full shadow hover:bg-green-600 focus:outline-none">New Task +</button>
            </div>
            <div className="h-1"></div>
            {groups?(<CreateTodo userDetails={user} refreshTodos={getTodos} groups={groups} showForm={showForm} setShowForm={setShowForm}/>):(<p>Loading</p>)}
            {todos&&groups?(<ShowTodos todos={todos.filter((todo)=>(todo.group===groupid))} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
        </div>
    )
}

export default GroupTaskPage