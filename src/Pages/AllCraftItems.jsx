import { Link, useLoaderData } from "react-router-dom"

const AllCraftItems = () => {

  const items = useLoaderData()


  

  // fetch(`http://localhost:5000/coffee/${items._id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedCoffee)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.modifiedCount > 0) {
  //         Swal.fire({
  //           title: "Awesome!",
  //           text: "Coffee Updated SuccessFully!",
  //           icon: "success"
  //         });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Item Name:</th>
            <th>Category:</th>
            <th>Status:</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            items.map((item, index) => <tr key={item._id}>
              <th>{index + 1}</th>
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
              <Link to={`/craft-item-details/${item._id}`}>
              <button className="btn btn-primary">View Property</button>
            </Link>
              </th>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllCraftItems
