import { useOutletContext } from "react-router-dom";
import ShowGroups from "../components/ShowGroups"
import ShowTodos from "../components/ShowTodos";
import CreateTodo from "../components/CreateTodo";
import CreateGroup from "../components/CreateGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";


const DashboardPage = () => {
    const {todos,getTodos,groups,user,getGroups}=useOutletContext();
    const [todoForm,setTodoForm]=useState(false);
    const [groupForm,setGroupForm]=useState(false);
    const [groupLimit,setGroupLimit]=useState(true);
    const navigate=useNavigate();

    const handleNavigation=(path)=>{
        navigate(path);
    }
    const toggleLimit=()=>{
        setGroupLimit(!groupLimit);
    }
    return (
        <div>
            <div className=" p-1 text-lg font-medium mb-7">Home</div>
            <hr className="my-2"></hr>
            <div className="flex justify-between items-center mb-3">
                <span className="text-lg">Groups</span>
                <div className="flex justify-end px-2 my-2">
                <button 
                onClick={() => setGroupForm(true)} 
                className="h-8 px-2 text-sm bg-green-500 text-white rounded-full shadow hover:bg-green-600 focus:outline-none w-28 ">New Group +</button>
                </div>
            </div>
            <CreateGroup userDetails={user} refreshGroups={getGroups} showForm={groupForm} setShowForm={setGroupForm}/>
            <div className="mb-7">
                <ShowGroups groups={groupLimit?groups.slice(0,4):groups} refreshGroups={getGroups}/>
            </div>
            <div className="flex justify-center" >{groupLimit?(<FaAngleDown className=" cursor-pointer" onClick={toggleLimit}/>):(<FaAngleUp className=" cursor-pointer" onClick={toggleLimit}/>)}</div>
            <hr className="my-2"></hr>
            <div className="flex justify-between items-center mb-3">
                <span className="text-lg">Tasks</span>
                <div className="flex justify-end px-2 my-2">
                <button 
                onClick={() => setTodoForm(true)} 
                className="h-8 px-2 text-sm bg-green-500 text-white rounded-full shadow hover:bg-green-600 focus:outline-none w-28">New Task +</button>
                </div>
            </div>
            {groups?(<CreateTodo userDetails={user} refreshTodos={getTodos} groups={groups} showForm={todoForm} setShowForm={setTodoForm}/>):(<p>Loading</p>)}
            <div className="flex justify-end px-2" ><span className="text-sm text-gray-400 hover:text-slate-600 cursor-pointer" onClick={()=>handleNavigation("/all")}>View all &gt;</span></div>
            <div>
                <ShowTodos todos={todos} groups={groups} refreshTodos={getTodos}/>
            </div>
        </div>
    )
}

export default DashboardPage