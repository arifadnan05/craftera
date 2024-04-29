import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"
import Footer from "../Pages/Footer"

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-32 mx-auto">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
