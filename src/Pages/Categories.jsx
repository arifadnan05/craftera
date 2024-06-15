import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom"
import Empty from "./Empty";

const Categories = () => {
  const data = useLoaderData()
  if (data < 1) {
    return <Empty message={'Post not found'} address={'/'} label={'Go To Home'}></Empty>
  }
  return (
    <div>
      {
        data.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={item.photo} /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.item_name}</h2>
            <div className="flex items-center justify-center my-4">
              <p className="flex justify-center">Price:- ${item.price}</p>
              <p className="flex items-center justify-center">Rating:- {item.rating} <FaStar /></p>
            </div>
            <div className="card-actions justify-center">
            <Link to={`/craft-item-details/${item._id}`}>
              <button className="btn btn-primary">View Property</button>
            </Link>
            </div>
          </div>
        </div>)
      }
    </div>

  )
}

export default Categories
