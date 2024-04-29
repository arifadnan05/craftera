import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

  const handleDelete = _id => {
    console.log(_id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete craft item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your craft item has been deleted.",
          icon: "success"
        });
        // single data fetching......
        fetch(`http://localhost:5000/craft-item/${_id}`,
          {
            method: 'DELETE'
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })

      }
    });

  }

  return (
    <div className="grid grid-cols-3 gap-5 border">
      {
        myItem.map(single => <div key={single._id} className="relative card bg-base-100 shadow-xl">
          <p className="absolute badge bg-amber-500 py-4 text-black font-bold ml-5 mt-5">{single.stockStatus}</p>
          <figure><img className="rounded-2xl" src={single.photo} /></figure>
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
              <button onClick={() => handleDelete(single._id)} className="btn btn-primary">Delete</button>
              <Link to={`/update-my-list/${single.userEmail}`}>
                <button>Update</button>
              </Link>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default MyCraftList
