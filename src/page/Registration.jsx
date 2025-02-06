import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Registation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const value = { name, photo, email, password };
    console.log(value);

    fetch("http://localhost:5000/usersVisa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("User Registation Successfully!");
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">SignUp</h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-xl my-8 shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control flex flex-col">
              <label className="label my-2 text-lg font-semibold text-black">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                required
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="photo"
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
            </div>
            <div className="form-control mt-6 flex justify-between">
              <div>
                <button className="btn btn-primary text-white border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-700">
                  Sign Up
                </button>
              </div>
              <div className="flex gap-6">
                <button className="flex btn items-center gap-2 px-3 py-1 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-md shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path
                      fill="#4285F4"
                      d="M24 9.5c3.9 0 7.1 1.3 9.6 3.6l7.1-7.1C36.6 2 30.7 0 24 0 14.8 0 6.7 5.1 2.3 12.7l8.2 6.4c2-5.9 7.5-9.6 13.5-9.6Z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.3 24.6c0-1.6-.1-3.2-.4-4.7H24v9.1h12.6c-.6 3.1-2.3 5.7-4.8 7.5l7.4 5.7c4.3-4 7.1-9.9 7.1-17.6Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.9 28.3c-.8-2.3-1.2-4.7-1.2-7.3s.4-5 1.2-7.3L3.6 7.2C1.3 11.4 0 16.5 0 24s1.3 12.6 3.6 16.8l8.3-6.5Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M24 48c6.5 0 12-2.1 16.1-5.7l-7.4-5.7c-2.1 1.4-4.7 2.3-7.7 2.3-6 0-11.5-3.8-13.5-9.6l-8.2 6.4C6.7 42.9 14.8 48 24 48Z"
                    />
                  </svg>
                  Google
                </button>
                <button className="flex btn items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md shadow-md">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.547-1.388-1.335-1.758-1.335-1.758-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.305 3.492.997.108-.776.42-1.305.76-1.605-2.665-.304-5.467-1.333-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.125-.303-.535-1.524.116-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.99-.399 3.01-.404 1.02.005 2.05.137 3.01.404 2.29-1.552 3.297-1.23 3.297-1.23.652 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.19.694.8.577C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
            <Link className="text-end my-2" to={`/login`}>
              Click Here to
              <span className="text-blue-600 hover:text-blue-800">Sign In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registation;
