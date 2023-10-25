import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import axiosInstance, { api } from "../api/axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userLoginCheck = localStorage.getItem('user')

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
          const token = data.token
          console.log(data.token);
          if (data.result.password === password) {
            toast.success(data.success, {
              position: "top-right",
              autoClose: 3000,
            });
            setTimeout(() => {
              localStorage.setItem('user',JSON.stringify({data,token}))
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
      <div
        className="h-screen"
        style={{
          backgroundImage: 'url("/images/loginbg.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ToastContainer />
        <div className=" flex flex-col items-center ">
          <form className="w-auto bg-amber-100 px-28 py-8 shadow-xl rounded-xl mt-20 ml-auto mr-16  ">
            <div className="flex items-start justify-center ">
              <h1 className="text-black text-4xl font-medium ">
                Login to our community
              </h1>
            </div>
            <div className="flex items-start justify-center mt-10  ">
              <input
                type="text"
                value={email}
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-10"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex items-start justify-center mt-6  ">
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-white focus:bg-amber-50 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-10"
                placeholder="Password"
              />
            </div>

            <div className="flex items-start justify-center mt-6">
              <div className="text-black text-lg font-bold">
                Dont have an account???
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
    </>
  );
}

export default LoginComponent;
