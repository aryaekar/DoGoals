const GroupCard = ({ group, deleteGroup }) => {
    return (
        <div
            className="border border-gray-300 rounded-md p-2 m-2 flex items-center justify-between"
            style={{
                fontSize: '14px',
                maxWidth: '250px',
                gap: '8px',
            }}
        >
            <span className="truncate" title={group.groupname} style={{ flex: 1 }}>
                {group.groupname}
            </span>

            <button
                onClick={() => deleteGroup(group._id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};

export default GroupCard;
