import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSignInForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const value = { email, password };
    console.log(value);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">SignIn</h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-xl my-8 shrink-0 shadow-2xl">
          <form onSubmit={handleSignInForm} className="card-body">
            <div className="form-control flex flex-col">
              <label className="label my-2 text-lg font-semibold text-black">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control flex flex-col">
              <label className="label my-2 text-lg font-semibold text-black">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute mt-13 right-12"
              >
                {showPassword ? <FaEyeSlash /> : <IoIosEye />}
              </p>
              <label className="label text-base text-black my-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">
                Sign Up
              </button>
            </div>
            <Link className="text-end my-2" to={`/registation`}>
              Click Here to
              <span className="text-gray-700 hover:text-gray-900">Sign Up</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
