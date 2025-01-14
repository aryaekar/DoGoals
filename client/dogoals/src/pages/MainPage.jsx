import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ShowTodos from "../components/ShowTodos";
import CreateTodo from "../components/CreateTodo";

const MainPage = () => {
    const userDetails=useOutletContext();
    const [todos,setTodos]=useState([]);
    const [groups,setGroups]=useState([]);

    const getTodos=async()=>{
        try{
            const res=await fetch(`http://localhost:8000/api/todos/${userDetails._id}`);
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
            const res=await fetch(`http://localhost:8000/api/groups/${userDetails._id}`);
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
        <>
            <h1>Home</h1>
            {groups?(<CreateTodo userDetails={userDetails} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
            {todos&&groups?(<ShowTodos todos={todos} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
        </>
    );
}

export default MainPage;