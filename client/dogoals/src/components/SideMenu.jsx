import { FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import CreateGroup from './CreateGroup';
import { useState, useEffect } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Cookies from "js-cookie";
import { HiOutlineLogout } from "react-icons/hi";

const SideMenu = ({ groups, displayMenu, user, getGroups, deleteGroup }) => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState();

    const handleNavigation = ( path) => {
        navigate(path);
        displayMenu();
    }
    const toggleDropdown = (e, id) => {
        e.stopPropagation();
        setOpenDropdownId(openDropdownId === id ? null : id);
    };
    const logOut = () => {
        Cookies.remove("userDetails");
        handleNavigation("/login");
    }
    useEffect(() => {
        const handleGlobalClick = () => {
            setOpenDropdownId(null);
        };

        if (openDropdownId) {
            document.addEventListener('click', handleGlobalClick);
            return () => document.removeEventListener('click', handleGlobalClick);
        }
    }, [openDropdownId, setOpenDropdownId]);
    return (
        <div className="fixed inset-0 flex">
            <div className="absolute inset-0 bg-black opacity-50" onClick={displayMenu}></div>
            <div className="relative p-2 bg-white w-1/6 z-10">
                <button onClick={displayMenu} className="ml-2 p-2 hover:bg-gray-200 rounded-full">
                    <FaBars size={24} />
                </button>
                <div className="mt-20">
                    <div className="h-8 p-1 mb-1 rounded-lg hover:bg-gray-200 cursor-pointer "
                        onClick={() => handleNavigation("/")}>Home</div>
                    <div className="h-8 p-1 mb-4 rounded-lg hover:bg-gray-200 cursor-pointer "
                        onClick={() => handleNavigation("/all")}>All</div>

                    {/* <hr></hr> */}
                    <div className="h-8 p-1 text-lg cursor-default font-semibold">Status</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id="Pending" onClick={() => handleNavigation("/status/Pending")}>Pending</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer" id="In-Progress" onClick={() => handleNavigation( "/status/In-Progress")}>In-Progress</div>
                    <div className="h-8 p-1 rounded-lg hover:bg-gray-200 cursor-pointer mb-4" id="Completed" onClick={() => handleNavigation("/status/Completed")}>Completed</div>

                    {/* <hr></hr> */}
                    <div className="h-8 p-1  text-lg cursor-default flex justify-between">
                        <span className='font-semibold'>Groups</span><div className='hover:bg-gray-300 rounded-full w-6 h-6 flex justify-center items-center'><button onClick={() => setShowForm(true)}>+</button></div>
                    </div>
                    {setShowForm && (<CreateGroup refreshGroups={getGroups} userDetails={user} showForm={showForm} setShowForm={setShowForm} />)}
                    <div className='h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 '>
                        {
                            groups.map((group) => (
                                <div className="h-8 p-1 flex justify-between rounded-lg hover:bg-gray-200 cursor-pointer" id={group._id} key={group._id} onClick={() => handleNavigation(`/group/${group._id}`)}>
                                    <div>{group.groupname}</div>
                                    <div>
                                        <div className="relative inline-block text-left">
                                            <button className="py-2 mx-2" onClick={(e) => toggleDropdown(e, group._id)}><HiDotsHorizontal /></button>
                                            {openDropdownId === group._id && (
                                                <div
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="absolute p-1 left-8 -top-0.5  bg-white border border-gray-300 rounded-md shadow-lg z-10"
                                                >
                                                    <div
                                                        onClick={() => deleteGroup(group._id)}
                                                        className="px-2 py-1 flex gap-x-2 text-red-500 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                                    >
                                                        <RiDeleteBin5Line className="my-1" /><span>Delete</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='px-2 py-1 flex gap-x-2 text-red-500 hover:bg-gray-100 cursor-pointer whitespace-nowrap rounded-md mt-8' onClick={logOut}>
                        <HiOutlineLogout size={22} /><span>Log out</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideMenu