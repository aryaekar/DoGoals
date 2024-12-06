import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({userDetails}) => {
  return (
    <>
        <Navbar/>
        <Outlet userDetails={userDetails}/>
    </>
  )
}

export default MainLayout;