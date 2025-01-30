import { useState } from 'react';

const CreateGroup = ({userDetails,refreshGroups,showForm,setShowForm}) => {
    const [name, setName] = useState("");
    const [error,setError]=useState("");
    const API_URL = process.env.SERVER_URL;

    const postGroup = async (e, name) => {
        e.preventDefault();
        try {
            const groupname = name;
            if (!groupname || groupname === "") {
                console.log("Invalid data");
                return;
            }
            const res = await fetch(`${API_URL}/api/groups/${userDetails._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ groupname: groupname })
            })
            if (!res.ok) {
                console.log("Error in sending data");
            }
            refreshGroups();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name||name===""){
            setError("This field is required")
            return;
        }
        setError("");
        postGroup(e,name);
        setName("");
        setShowForm(false);
    }
    return (
        <div>
            
            {showForm && (
                <div className=" inset-0 fixed bg-black bg-opacity-50 flex justify-center items-center">
                    <form className="bg-white p-8 rounded-lg shadow-md w-2/5" onSubmit={handleSubmit}>

                        <h3 className="text-lg font-bold mb-4">Create Group</h3>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        {error&& (<div className="text-red-600">{error}</div>)}
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 mt-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={()=>{
                                    setError("");
                                    setShowForm(false);
                                }}
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
    )
}

export default CreateGroup