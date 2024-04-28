import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { FaStar } from "react-icons/fa";

const MyCraftList = () => {
  const [myItem, setMyItem] = useState([])

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/craft-item/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyItem(data)

      })
  }, [user])
  return (
    <div>
      {
        myItem.map(single => <div key={single._id} className="relative card w-96 bg-base-100 shadow-xl">
          <p className="absolute badge bg-amber-500 py-4 text-black font-bold ml-5 mt-5">{single.stockStatus}</p>
          <figure><img src={single.photo}/></figure>
          <div className="card-body">
            <h2 className="card-title">{single.item_name}</h2>
            <div className="flex items-center justify-center my-4">
              <p className="flex justify-center">Price:- ${single.price}</p>
              <p className="flex items-center justify-center">Rating:- {single.rating} <FaStar /></p>
            </div>
            <div className="mx-auto">
              <p>Customizable:- {single.customization}</p>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default MyCraftList
