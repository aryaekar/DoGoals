import React, { useState } from 'react';

const CreateTodo = ({ userDetails, refreshTodos }) => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedGroup, setSelectedGroup] = useState("");

    const postTodo = async (e, title) => {
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
        postTodo(e, title,selectedGroup);
        setTitle("");
        setShowForm(false);
    };

    return (
        <div>
            <button
                onClick={() => setShowForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none"
            >
                Create Todo
            </button>

            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-lg shadow-md w-2/5"
                    >
                        <h3 className="text-lg font-bold mb-4">Create Todo</h3>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 mt-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Group:</label>
                        <select
                            id="group"
                            value={selectedGroup}
                            onChange={(e) => setSelectedGroup(e.target.value)}
                            className="w-full px-3 py-2 mt-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">Select a group</option>
                            {/* {groups.map((group) => (
                                <option key={group._id} value={group._id}>
                                    {group.name}
                                </option>
                            ))} */}
                        </select>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreateTodo;
