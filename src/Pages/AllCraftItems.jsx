import { useLoaderData } from "react-router-dom"

const AllCraftItems = () => {

  const items = useLoaderData()
  console.log(items)

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item Name:</th>
            <th>Category:</th>
            <th>Status:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            items.map(item => <tr key={item._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.photo} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.item_name}</div>
                  </div>
                </div>
              </td>
              <td>{item.subcategory_name}</td>
              <td>{item.stockStatus}</td>
              <th>
                <button className="btn btn-info">View Details Page</button>
              </th>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllCraftItems
