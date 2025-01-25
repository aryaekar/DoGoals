import { FaBars } from 'react-icons/fa6';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { HiOutlineLogout } from "react-icons/hi";
import { useState, useEffect } from 'react';

const Navbar = ({ displayMenu }) => {
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setOpenDropdownId(!openDropdownId);
  };
  useEffect(() => {
    const handleGlobalClick = () => {
      setOpenDropdownId(false);
    };

    if (openDropdownId) {
      document.addEventListener('click', handleGlobalClick);
      return () => document.removeEventListener('click', handleGlobalClick);
    }
  }, [openDropdownId, setOpenDropdownId]);

  const handleNavigation = (path) => {
    navigate(path);
  }
  const logOut = () => {
    Cookies.remove("userDetails");
    handleNavigation("/login");
  }
  return (
    <div className="fixed top-0 left-0 w-full h-14 p-2 flex justify-between bg-white">
      <button onClick={displayMenu} className='ml-2 p-2 hover:bg-gray-200 rounded-full '>
        <FaBars size={24} />
      </button>
      <h1 className="mr-5 text-2xl p-1 font-extrabold text-orange-500 cursor-pointer" onClick={() => handleNavigation("/")}>DoGoals</h1>
      <div>
        <button className="m-2" ><CgProfile size={26} onClick={toggleDropdown}/></button>
        {openDropdownId && (
          <div className="bg-white z-10 border p-2 absolute right-5 rounded-md shadow-lg top-11">
            <div className='px-2 py-1 flex gap-x-2 text-red-500 hover:bg-gray-100 cursor-pointer whitespace-nowrap rounded-md' onClick={logOut}>
              <HiOutlineLogout size={22} /><span>Log out</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar