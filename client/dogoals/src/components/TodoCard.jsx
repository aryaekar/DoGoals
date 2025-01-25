import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useEffect } from "react";

const TodoCard = ({ todo, deleteTodo, groups, updateTodo, openDropdownId, setOpenDropdownId }) => {
    const groupObject = groups.find((group) => group._id === todo.group);
    const groupname = groupObject ? groupObject.groupname : "";

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setOpenDropdownId(openDropdownId === todo._id ? null : todo._id);
    };

    useEffect(() => {
        const handleGlobalClick = () => {
            setOpenDropdownId(null);
        };

        if (openDropdownId === todo._id) {
            document.addEventListener('click', handleGlobalClick);
            return () => document.removeEventListener('click', handleGlobalClick);
        }
    }, [openDropdownId, todo._id, setOpenDropdownId]);
    return (
        <div className="border border-gray-300 rounded-lg p-2.5 my-2 flex justify-between items-center">
            <span className="text-gray-800 font-medium">{todo.title}</span>
            <div className="flex justify-end w-60">
                {groupname && (
                    <div className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md mx-1 font-medium">
                        {groupname}
                    </div>
                )}
                <select
                    id="status"
                    value={todo.status}
                    onChange={(e) => updateTodo(todo._id, e.target.value)}
                    className={`px-2 py-1 mx-1 rounded-lg appearance-none focus:outline-none font-medium ${todo.status === "Pending"
                            ? "bg-gray-200 text-red-500"
                            : todo.status === "In-Progress"
                                ? "bg-gray-200 text-yellow-500"
                                : "bg-gray-200 text-green-500"
                        }`}
                >
                    <option value="Pending">Pending</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <div className="relative inline-block text-left">
                    <button className="py-2 mx-2" onClick={toggleDropdown}><HiDotsHorizontal /></button>
                    {openDropdownId === todo._id && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute p-1 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10"
                        >
                            <div
                                onClick={() => deleteTodo(todo._id)}
                                className="px-2 py-1 flex gap-x-2 text-red-500 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                            >
                                <RiDeleteBin5Line className="my-1" /><span>Delete</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
