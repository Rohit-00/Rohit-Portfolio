import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='bg-black text-gray-200'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
