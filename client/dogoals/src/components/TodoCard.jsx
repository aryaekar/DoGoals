import React from 'react';

const TodoCard = ({ todo, deleteTodo, groups }) => {
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
            <div className="flex justify-between w-44">
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
