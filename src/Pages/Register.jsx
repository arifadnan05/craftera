import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { name, email, photo, password } = data;

    if (password.length < 6) {
      setErrorPassword("Password should be at least 6 characters or longer ")
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorPassword("Your Password Should be Upper Case");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorPassword("Your Password Should be Lower Case");
      return;
    }

    createUser(email, password)

      .then(() => {
        updateUserProfile(name, photo)
        // console.log(result.user)

        const user = { name, email, password, photo }
        fetch('https://craftera.vercel.app/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)

        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: "Registration Success!",
                icon: "success"
              });
              navigate('/')
            }
          })

      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" className="input input-bordered" required {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" required {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="Photo URL" className="input input-bordered" required {...register("photo", { required: true })} />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" required {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}

              {
                errorPassword && <p>{errorPassword}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
