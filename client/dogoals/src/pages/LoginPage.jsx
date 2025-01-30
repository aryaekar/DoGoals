import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_SERVER_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError("Both fields are required");
            return;
        }

        try {
            setError("");
            const response = await fetch(`${API_URL}/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.msg);
                return;
            }

            Cookies.set("userDetails", JSON.stringify(data), { expires: 5 });
            navigate('/');

        } catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen py-32 px-4">
            <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">DoGoals</h1>
            <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border">
                <div className="px-6 py-8">
                    
                    <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Login to Your Account</h2>
                    <div className="font-medium mb-4 mt-5 py-2 ">Don't have a account? <span className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={()=>navigate("/register")}>Register</span></div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded-md text-center">
                                {error}
                            </div>
                        )}
                        
                        <div>
                            <label htmlFor="email" className="block  font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block  font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;