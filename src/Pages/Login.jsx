/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import google from "../../public/google.svg"
import github from "../../public/github.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {

  const { logInUser, googleSingIn, githubSingIn } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {

    const { email, password } = data;

    logInUser(email, password)
      .then(() => {
        // console.log(userCredential.user)
        // navigate
        navigate(location?.state ? location.state : '/')
       
      })
      .catch((error) => {
        console.error(error)
      })


    
  }



  // google login

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then(() => {
        // console.log(userCredential.user)
        navigate(location?.state ? location.state : '/')

        Swal.fire({
          title: "Good job!",
          text: "Logged In Success",
          icon: "success"
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleGithubLogin = () => {
    githubSingIn()
      .then(() => {
        // console.log(userCredential.user)
        navigate(location?.state ? location.state : '/')
        Swal.fire({
          title: "Good job!",
          text: "Logged In Success",
          icon: "success"
        });
      
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-3xl">Please Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control relative">
                <p>Password</p>
                <label className="label flex items-center gap-2 input input-bordered border">
                  <input

                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    // className=""
                    required
                    {...register("password", { required: true })}

                  />


                  <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                    {
                      showPassword ? <FaRegEye className="ml-16" /> : <FaRegEyeSlash className="ml-16" />
                    }
                  </span>
                </label>
                {errors.password && <span>This field is required</span>}

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account? <Link to='/register'><span className="text-blue-700 font-semibold text-lg">Sing Up</span></Link></p>
            </form>

            <div className="-mt-5 flex items-center justify-center">
              <button onClick={handleGoogleSingIn} className="btn"><img className="w-6" src={google} /></button>
              <button onClick={handleGithubLogin} className="btn"><img className="w-6" src={github} /></button>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login
