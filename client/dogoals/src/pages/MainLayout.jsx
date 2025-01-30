import { Outlet,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [user, setuser] = useState();
  const [showmenu, setShowmenu] = useState(false);
  const navigate=useNavigate();

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
  const displayMenu = () => {
    setShowmenu(!showmenu);
  }
  return (
    <div>
      <Navbar displayMenu={displayMenu} />
      {!user && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 mb-10">
            <h2 className="text-xl font-semibold text-center mb-4">Welcome!</h2>
            <p className="text-gray-500 text-center mb-6">Please log in or register to continue.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
      {user ? <Outlet context={{ user, showmenu, displayMenu }} /> : <h2>Loading user...</h2>}
    </div>
  )
}

export default MainLayout;