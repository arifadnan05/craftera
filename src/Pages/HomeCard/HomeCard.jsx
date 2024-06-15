import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const HomeCard = () => {
  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('https://craftera.vercel.app/art-craft-card')
      .then(res => res.json())
      .then(data => {
        setCard(data)
      })
  }, [])

  return (
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
          card.map(singleCard => <div key={singleCard._id} className="relative card bg-base-100 shadow-xl">
            <p className="absolute badge bg-amber-500 py-4 text-black font-bold ml-5 mt-5">{singleCard.stockStatus}</p>
            <figure><img className="rounded-2xl h-[350px] w-full" src={singleCard.photo} /></figure>
            <div className="card-body">
              <h2 className="card-title">{singleCard.item_name}</h2>
              <div className="flex items-center justify-center my-4">
                <p className="flex justify-center">Price:- ${singleCard.price}</p>
                <p className="flex items-center justify-center">Rating:- {singleCard.rating} <FaStar /></p>
              </div>
              <div className="card-actions mx-auto">
                <Link to={`/view-card-details/${singleCard._id}`}>
                  <button className="btn btn-info">View Details</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
  )
}

export default HomeCard
