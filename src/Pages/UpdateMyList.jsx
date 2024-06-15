import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";


const UpdateMyList = () => {
  const craftItem = useLoaderData();
  const { _id, item_name, subCategory, price, processing_time, short_description, photo } = craftItem;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { item_name, subCategory, price, processing_time, rating, customization, stockStatus, short_description, photo } = data;

    const updateMyCraftItem = { item_name, subCategory, price, processing_time, rating, customization, stockStatus, short_description, photo }



    fetch(`https://craftera.vercel.app/craftitem/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateMyCraftItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Awesome!",
            text: "Coffee Updated SuccessFully!",
            icon: "success"
          });

        }
      })
  }

  return (
    <div className="px-32 mb-20">
      <h1>This is update page {craftItem.item_name}</h1>






      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="w-full flex justify-center space-x-8 my-5">
          <div className="flex flex-col w-1/2">
            <input defaultValue={item_name} type="text" placeholder="Item Name" className="input input-bordered w-full" {...register("item_name", { required: true })} />
            {errors.photo && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-1/2">
            <select defaultValue={subCategory} className="select select-bordered w-full" {...register("subCategory")}>
              <option disabled selected>Sub Category</option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>

        <div className="w-full flex justify-center space-x-8 my-6">
          <div className="flex flex-col w-1/2">
            <input defaultValue={price} type="text" placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true })} />
            {errors.price && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-1/2">
            <input defaultValue={processing_time} type="text" placeholder="Processing Time" className="input input-bordered w-full" {...register("processing_time", { required: true })} />
            {errors.processing_time && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex justify-between my-6">
          <select className="select select-bordered w-full max-w-xs" {...register("rating")}>
            <option disabled selected>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="select select-bordered w-full max-w-xs" {...register("customization")}>
            <option disabled selected>Customization</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <select className="select select-bordered w-full max-w-xs" {...register("stockStatus")}>
            <option disabled selected>Stock Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div className="my-6">
          <textarea defaultValue={short_description} placeholder="Short Description" className="textarea textarea-bordered textarea-lg w-full h-24" {...register("short_description", { required: true })}></textarea>
          {errors.photo && <span>This field is required</span>}
        </div>
        <div>
          <input defaultValue={photo} type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("photo", { required: true })} />
          {errors.photo && <span>This field is required</span>}
        </div>
        <div className="flex justify-center mt-4">
          <button className="btn btn-info px-8 text-neutral-950 font-medium text-lg">Update</button>
        </div>
      </form>

    </div>
  )
}

export default UpdateMyList
