import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"
import Footer from "../Pages/Footer"

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-4 md:px-10 mt-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
