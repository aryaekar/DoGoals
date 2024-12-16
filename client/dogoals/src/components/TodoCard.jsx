import React from 'react';

const TodoCard = ({ todo, deleteTodo }) => {
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
    );
};

export default TodoCard;
