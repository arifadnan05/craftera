import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (

    <div className="px-32">
      <div className="flex justify-center mt-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select className="border px-4 py-3 rounded-lg" {...register("customization")}>
            <option disabled selected>Customization</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">

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
              <div className="card-actions flex justify-between mt-4">
                <button onClick={() => handleDelete(single._id)} className="btn btn-warning">Delete</button>
                <Link to={`/update-my-list/${single._id}`}>
                  <button className="btn btn-info">Update</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default MyCraftList
