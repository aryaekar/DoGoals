import { useEffect, useState } from "react";
import TodoManager from "../components/TodoManager";
import Cookies from "js-cookie";

const Home = () => {
    const [user, setuser] = useState();
    useEffect(() => {
        const cookieData = Cookies.get("userDetails");
        if (cookieData) {
            try {
                setuser(JSON.parse(cookieData)); // Safely parse JSON data
            } catch (error) {
                console.error("Invalid cookie format:", error);
            }
        }
    }, [])
    return (
        <>
            <h1>Home</h1>
            {user ? (<TodoManager userDetails={user} />) : (<p>Loading user details...</p>)}
        </>
    );
}

export default Home;