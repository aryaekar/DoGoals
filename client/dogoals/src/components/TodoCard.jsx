const TodoCard = ({ todo, deleteTodo, groups, updateTodo }) => {
    const groupObject = groups.find(group => group._id === todo.group);
    const groupname = groupObject ? groupObject.groupname : "None";    

    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '8px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <span>{todo.title}</span>
            <div className="flex justify-around w-60">
                <select id="status" value={todo.status} onChange={(e) => updateTodo(todo._id,e.target.value)} className="bg-slate-400 p-2 rounded-md appearance-none">
                    <option value="Pending" className="">Pending</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <div className="bg-slate-400 p-2 rounded-md">{groupname}</div>
                <button 
                    onClick={() => deleteTodo(todo._id)} 
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
