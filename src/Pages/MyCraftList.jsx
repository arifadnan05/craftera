import { useContext, useEffect } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const MyCraftList = () => {


  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/craft-item/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [user])

  return (
    <div>
      <h1>This is my craft list</h1>
    </div>
  )
}

export default MyCraftList
