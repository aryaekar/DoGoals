import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [user, setuser] = useState();
  const [showmenu,setShowmenu]=useState(false);
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
    const displayMenu=()=>{
      setShowmenu(!showmenu);
    }
  return (
    <div>
        <Navbar displayMenu={displayMenu}/>
        {user?<Outlet context={{user,showmenu,displayMenu}}/>:<h2>Loading user...</h2>}
    </div>
  )
}

export default MainLayout;