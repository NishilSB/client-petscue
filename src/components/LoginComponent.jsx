import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import axiosInstance, { api } from "../api/axios";
import "react-toastify/dist/ReactToastify.css";
import { toast ,ToastContainer} from 'react-toastify';

import { api } from "../api/axios";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/");
    }
  }, []);

  const userLoginCheck = localStorage.getItem("user");

  console.log(userLoginCheck);

  const submitHandle = async () => {
    try {
      if (email.trim().length == 0 || password.trim().length == 0) {
        toast.error("Fill the fields", {
          position: "top-right",
          autoClose: 1000,
        });
      } else {

        const { data } = await api.post("/user/login", { email });
        console.log(data);

        if (data) {

          const token = data.token;
          console.log(data.token);

          if (data.result.password === password) {
            toast.success(data.success, {
              position: "top-right",
              autoClose: 3000,
            });
            setTimeout(() => {
              localStorage.setItem("user", JSON.stringify({ data, token }));
              navigate("/");
            }, 2000);
          } else {
            toast.error("Invalid password", {
              position: "top-right",
              autoClose: 3000,
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
       {/* <div className="h-screen " style={{
          backgroundImage: 'url("images/expert 1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ToastContainer />
        <div className=" flex flex-col items-center ">
          <form className="w-1/3 bg-transparet shadow-amber-200 px-32 py-8 shadow-xl rounded-xl mt-20 ml-auto mr-16 ">
            <div className="flex items-start justify-center ">
              <h1 className="text-black  md:text-red-500  md:text-xl  lg:text-green-500 lg:text-4xl">
               User Login
              </h1>
            </div>
            <div className="flex items-start justify-center mt-10  ">
              <input
                type=" text"
                value={''+ email}
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-2 w-full"
                placeholder="    Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex items-start justify-center mt-6  ">
              <input
                type=" password"
                value={''+password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-white focus:bg-amber-50 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-2 w-full"
                placeholder="    Password "
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <div className="text-black sm:text-blue-700  md:text-red-500  md:text-lg  lg:text-green-500 lg:text-xl ">
                Dont have an account ?
              </div>
              <h1 className=" text-black md:text-red-500  md:text-base  lg:text-green-500 lg:text-lg">
              Dont have an account ?
              </h1>

              <span className="mx-1"></span>
              <Link
                className="underline border-b border-blue text-blue-700"
                to="/register"
              >
                Sign Up{" "}
              </Link>
            </div>

            <div className="flex items-start justify-center mt-6  ">
              <button
                type="button"
                onClick={submitHandle}
                className="bg-red-900 text-white font-bold py-3 px-10 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <p className=" border-b text-blue-700 border-blue text-blue">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>  */}

       <div
        className="bg-gray-600 w-screen h-screen flex sm:w-full md:w-full lg:w-full"
        style={{
          backgroundImage: 'url("images/loginbg.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg- w-full h-full"></div>

        <div className="bg- w-full h-full flex items-center justify-center sm:w-full md:w-full lg:w-full ">
          <div >
            <form className="w-auto bg-amber-100 px-32 py-8 shadow-xl rounded-xl mt-20 ml-auto mr-16  ">
              <div className="flex items-center justify-center ">
                <h1 className="text-black md:text-2xl lg:text-4xl">User Login</h1>
              </div>
              <div className="flex items-start justify-center mt-10  ">
                <input
                  type=" text"
                  value={"" + email}
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-2 w-full"
                  placeholder="    Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-start justify-center mt-6  ">
                <input
                  type=" password"
                  value={"" + password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-white focus:bg-amber-50 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-2 w-full"
                  placeholder="    Password "
                />
              </div>

              <div className="flex items-start justify-center mt-6">
                <div className="text-black text-base sm:text-base md:text-lg lg:text-lg ">
                  Dont have an account ?
                </div>
                <span className="mx-1"></span>
                <Link
                  className="underline border-b border-blue text-blue-700"
                  to="/register"
                >
                  Sign Up{" "}
                </Link>
              </div>

              <div className="flex items-start justify-center mt-6  ">
                <button
                  type="button"
                  onClick={submitHandle}
                  className="bg-red-900 text-white font-bold py-3 px-10 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center mt-3">
                <p className=" border-b text-blue-700 border-blue text-blue">
                  Forgot Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </>
  );
}

export default LoginComponent;
