import { useState } from "react";
import axiosInstance from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function RegisterComponent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [err,setErr] = useState("")

  const regex_password = /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9]){8,16}/;
  const regex_mobile = /^\d{10}$/;
  const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleUserOtp = async () => {
    try {
      await axiosInstance.post("/user/createOtp", { email });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("enter  name", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (regex_email.test(email) == false) {
      toast.error("enter valid email", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (regex_mobile.test(phone) == false) {
      toast.error("enter valid phone number", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (!password) {
      toast.error("enter password", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (regex_password.test(password) == false) {
      toast.error("use strong password", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (!confirmPassword) {
      toast.error("enter confirm password", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (password != confirmPassword) {
      toast.error("password dosnt match", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      try {
        setModalOpen(true);
        const { data } = await axiosInstance.post("/user/signup", {
          name,
          email,
          phone,
          password,
          confirmPassword,
        });

        if (data) {
          handleUserOtp();

          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  
  const findOTP = async () => {
    console.log(email, otp, "fdddddddddddddddddd");
    const { data } = await axiosInstance.post("/user/getOtp", {email,otp});
    console.log(data);

    const userOtp = data.otpMatch.OTP;
    console.log(userOtp, "ssssssss", otp);
    if (userOtp === otp) {
      setModalOpen(false);
      toast.success(data.message, {
        position: "top-right",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      toast.error("Incorrect OTP", {
        position: "top-right",
        autoClose: 3000,
      });
      const error = "otp invalid"
      setErr(error)
      
    }
  };
  // const handleModalOpen = ()=>{
  //   setModalOpen(true)
  // }

  return (
    <>
      <div>
        <div
          className="h-screen"
          style={{
            backgroundImage: 'url("public/images/pet.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <ToastContainer />
          <div className=" flex flex-col items-center justify-center ">
            <div className="flex items-start justify-center ">
              <h1 className="text-black text-3xl font-semibold">
                Create Your Account
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-auto bg-white  p-4 shadow-xl rounded-xl mt-4"
            >
              <div className="flex items-start justify-center ">
                <input
                  type="text"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                  placeholder="Full Name"
                  name="fullname"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex items-start justify-center mt-6  ">
                <input
                  type="text"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-start justify-center mt-6  ">
                <input
                  type="text"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex items-start justify-center mt-6  ">
                <input
                  type="password"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-start justify-center mt-6  ">
                <input
                  type="password"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-center">
                <span className="text-green-600 text-lg mt-3"></span>
              </div>

              <div className="flex items-start justify-center mt-6  ">
                <button
                  type="submit"
                  className="bg-red-900 text-2xl text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Sign Up
                </button>
              </div>

              <div className="flex items-start justify-center mt-6">
                <div className="text-black text-lg font-medium">
                  Do You have an account???
                </div>

                <span className="mx-1"></span>

                <Link
                  className="underline border-b border-blue text-blue-700"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </form>
            {modalOpen && (
              <div className="fixed inset-0 z-50 overflow-auto bg-gray-400 bg-opacity-30 rounded-xl flex items-center justify-center">
                <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6">
                  <div className=" justify-between text-center items-center mb-4">
                    <h5 className="text-xl text-center font-semibold text-gray-800 ">
                      Enter Otp
                    </h5>
                  </div>
                  <div className="flex justify-center items-center">
                    <input
                      type="text"
                      name="otp"
                      className="rounded-lg h-9 border-gray-300  border text-center"
                      placeholder="otp"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                  </div>
                <p className="text-red-500">{err}</p>  
                  <div className="flex justify-center items-center">
                    <button
                      className="bg-black text-white hover:text-black hover:bg-transparent hover:border hover:border-black px-3 mt-3 py-2 rounded-lg just "
                      onClick={findOTP}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterComponent;
