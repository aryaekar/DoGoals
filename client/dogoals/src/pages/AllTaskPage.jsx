import { useOutletContext } from "react-router-dom"
import ShowTodos from "../components/ShowTodos"

const AllTaskPage = () => {
    const {todos,getTodos,groups}=useOutletContext();
    return (
        <div>
            <div className="m-3 p-1 text-lg font-medium">All Tasks</div>
            {todos&&groups?(<ShowTodos todos={todos} refreshTodos={getTodos} groups={groups}/>):(<p>Loading</p>)}
        </div>
    )
}

export default AllTaskPage