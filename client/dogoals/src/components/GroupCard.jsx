import { useNavigate } from 'react-router-dom';

const GroupCard = ({ group, deleteGroup }) => {
  const navigate = useNavigate();

  const handleNavigation = ( path) => {
    navigate(path);
}
    return (
      <div className="border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between max-w-xs gap-4 w-64 bg-blue-50 cursor-pointer" onClick={()=>handleNavigation(`/group/${group._id}`)}>
        {/* Group Name */}
        <span 
          className="truncate text-sm font-medium text-gray-800 flex-1 " 
          title={group.groupname}
        >
          {group.groupname}
        </span>
  
        {/* Delete Button */}
        <button
          onClick={() => deleteGroup(group._id)}
          className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default GroupCard;
  