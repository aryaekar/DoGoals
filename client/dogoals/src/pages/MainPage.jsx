import { useEffect, useState } from "react";
import { useOutletContext,Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const MainPage = () => {
    const {user,showmenu,displayMenu}=useOutletContext();
    const [todos,setTodos]=useState([]);
    const [groups,setGroups]=useState([]);
    const API_URL = process.env.SERVER_URL;


    const deleteGroup = async (id) => {
        try {
            const res = await fetch(`${API_URL}/api/groups/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                console.log("Error in deleting data");
            }
            getGroups();
        }
        catch (error) {
            console.log(error);
        }
    }

    const getTodos=async()=>{
        try{
            const res=await fetch(`${API_URL}/api/todos/${user._id}`);
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
            const res=await fetch(`${API_URL}/api/groups/${user._id}`);
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
            {showmenu?<SideMenu groups={groups} displayMenu={displayMenu} getGroups={getGroups} user={user} deleteGroup={deleteGroup}/>:null}
            <div className="bg-white p-6 m-1 rounded-lg min-h-">
                <Outlet context={{user,todos,groups,getTodos,getGroups}}/>
            </div>
        </div>
    );
}

export default MainPage;