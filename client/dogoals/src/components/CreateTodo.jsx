import React, { useState } from 'react';
const CreateTodo = ({ userDetails, refreshTodos }) => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");

    const postTodo = async (e,title) => {
        e.preventDefault();
        try {
            const value = title;
            if (!value || value === "") {
                console.log("Invalid data");
                return;
            }
            const res = await fetch(`http://localhost:8000/api/todos/${userDetails._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: value })
            });
            if (!res.ok) {
                console.log("Error in sending data");
            }
            refreshTodos();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postTodo(e,title);
        setTitle("");
        setShowForm(false);
    };

    return (
        <div>
            <button
                onClick={() => setShowForm(true)}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Create Todo
            </button>

            {showForm && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            width: '300px',
                        }}
                    >
                        <h3>Create Todo</h3>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                margin: '10px 0',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                style={{
                                    backgroundColor: 'gray',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default CreateTodo