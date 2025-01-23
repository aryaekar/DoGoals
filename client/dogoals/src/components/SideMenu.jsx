import { FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({groups ,displayMenu}) => {
    const navigate=useNavigate();
    
    const handleNavigation=(e,path)=>{
        e.preventDefault();
        navigate(path);
        displayMenu();
    }
    return (
        <div className="fixed inset-0 flex">
            <div className="absolute inset-0 bg-black opacity-50" onClick={displayMenu}></div>
            <div className="relative p-2 bg-white w-1/6 z-10">
                <button onClick={displayMenu} className="ml-2 p-2 hover:bg-gray-200 rounded-full">
                    <FaBars size={24}/>
                </button>
                <div className="mt-20">
                    <div className="h-8 p-1 mb-1 rounded-lg hover:bg-gray-200 cursor-pointer" 
                    onClick={(e)=>handleNavigation(e,"/")}>All</div>

                    <div className="h-8 p-1 mt-2 text-lg cursor-default font-semibold">Status</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id="Pending" onClick={(e)=>handleNavigation(e,"/status/Pending")}>Pending</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id="In-Progress" onClick={(e)=>handleNavigation(e,"/status/In-Progress")}>In-Progress</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id="Completed" onClick={(e)=>handleNavigation(e,"/status/Completed")}>Completed</div>

                    <div className="h-8 p-1 mt-2 text-lg cursor-default font-semibold">Groups</div>
                    {
                        groups.map((group) => (
                            <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id={group._id} key={group._id} onClick={(e)=>handleNavigation(e,`/group/${group._id}`)}>{group.groupname}</div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default SideMenu