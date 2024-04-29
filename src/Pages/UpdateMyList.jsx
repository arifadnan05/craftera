import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyList = () => {


    const craftItem = useLoaderData();
    console.log(craftItem)


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {


        
        fetch(`http://localhost:5000/craft-item/${_id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
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
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="w-full flex justify-center space-x-8 my-5">
          <div className="flex flex-col w-1/2">
            <input type="text" placeholder="Item Name" className="input input-bordered w-full" {...register("item_name", { required: true })} />
            {errors.photo && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-1/2">
            <input type="text" placeholder="Subcategory Name" className="input input-bordered w-full" {...register("subcategory_name", { required: true })} />
            {errors.photo && <span>This field is required</span>}
          </div>
        </div>

        <div className="w-full flex justify-center space-x-8 my-6">
          <div className="flex flex-col w-1/2">
            <input type="text" placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true })} />
            {errors.price && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-1/2">
            <input type="text" placeholder="Processing Time" className="input input-bordered w-full" {...register("processing_time", { required: true })} />
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
          <textarea placeholder="Short Description" className="textarea textarea-bordered textarea-lg w-full h-24" {...register("short_description", { required: true })}></textarea>
          {errors.photo && <span>This field is required</span>}
        </div>
        <div>
          <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("photo", { required: true })} />
          {errors.photo && <span>This field is required</span>}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-info px-8 text-neutral-950 font-medium text-lg">Add</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateMyList
