import { useEffect, useState } from "react";
import { useOutletContext,Outlet } from "react-router-dom";
import ShowTodos from "../components/ShowTodos";
import CreateTodo from "../components/CreateTodo";
import CreateGroup from "../components/CreateGroup";
import ShowGroups from "../components/ShowGroups";
import SideMenu from "../components/SideMenu";

const MainPage = () => {
    const {user,showmenu,displayMenu}=useOutletContext();
    const [todos,setTodos]=useState([]);
    const [groups,setGroups]=useState([]);

    const getTodos=async()=>{
        try{
            const res=await fetch(`http://localhost:8000/api/todos/${user._id}`);
            const result=await res.json();
            if(!result){
                console.log({"error":"error while fetching todos"});
                return;
            }
            setTodos(result);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getTodos();
        // eslint-disable-next-line
    },[]);

    const getGroups=async()=>{
        try{
            const res=await fetch(`http://localhost:8000/api/groups/${user._id}`);
            const result=await res.json();
            if(!result){
                console.log({"error":"error while fetching groups"});
                return;
            }
            setGroups(result);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getGroups();
        // eslint-disable-next-line
    },[]);
    
    return (
        <div className="mt-14 p-2 bg-gray-100 h-screen">
            {showmenu?<SideMenu groups={groups} displayMenu={displayMenu}/>:null}
            <div className="bg-white p-2 m-1 rounded-lg">
                <Outlet context={{user,todos,groups,getTodos,getGroups}}/>
            </div>
            {/* <CreateGroup userDetails={user} refreshGroups={getGroups}/>
            {groups?(<CreateTodo userDetails={user} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
            {todos&&groups?(<ShowTodos todos={todos} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
            {groups?(<ShowGroups groups={groups} refreshGroups={getGroups}/>):(<p>Loading</p>)} */}
        </div>
    );
}

export default MainPage;