import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-32 mx-auto">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Root
