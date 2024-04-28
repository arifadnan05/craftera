import { useLoaderData, useParams } from "react-router-dom"

const CraftItemDetails = () => {
  const items = useLoaderData();
  const { id } = useParams();

  const craftItem = items.find(item => item._id === id);
  console.log(craftItem)
  return (
    <div>
      <h1>This is craft item details {craftItem.item_name}</h1>
    </div>
  )
}

export default CraftItemDetails
