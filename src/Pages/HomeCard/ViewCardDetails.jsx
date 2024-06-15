import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom"

const ViewCardDetails = () => {
    const card = useLoaderData();
    // console.log(card)
    const { id } = useParams();
    const viewCard = card.find(item => item._id === id)
    const { item_name, photo, subCategory, short_description, price, rating, stockStatus } = viewCard;
    return (
        <div className="card lg:card-side px-10 bg-base-100 my-16">
            <div className="w-[40%]">
                <figure><img className="rounded-xl" src={photo} /></figure>
            </div>
            <div className="card-body w-[60%]">
                <h2 className="card-title">{item_name}</h2>
                <p> <span className="font-bold mr-2">Category:</span> {subCategory}</p>
                <p className="font-bold">{stockStatus}</p>
                <p><span className="font-bold mr-2">Price:</span> ${price}</p>
                <p className="flex items-center"><span className="font-bold mr-2">Rating:</span> {rating}<span className="ml-1"><FaStar /></span></p>
                <p>{short_description}</p>
            </div>
        </div>
    )
}

export default ViewCardDetails
