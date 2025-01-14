import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const MainLayout = () => {
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
        <Navbar/>
        {user?<Outlet context={user}/>:<h2>Loading user...</h2>}
    </>
  )
}

export default MainLayout;