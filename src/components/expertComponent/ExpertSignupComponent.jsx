import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

const ExpertSignupComponent = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // const [otp, setOtp] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  // const [err,setErr] = useState("")

  const regex_password = /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9]){8,16}/;
  const regex_mobile = /^\d{10}$/;
  const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


  const handleExpertOtp=async()=>{
    try {
      await api.post('/expert/expertOtp',{email})
      
    } catch (error) {
      console.log(error);
      
    }
  }

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
      toast.error("password doesnt match", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      try {

        const  expertData  = await api.post("/expert/signup", {name,email,phone,password,confirmPassword});
         
        console.log(expertData);

        if (expertData) {

          handleExpertOtp()

          console.log(expertData.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div
        className=" h-screen"
        style={{
          backgroundImage: 'url("public/images/expert 1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
         <ToastContainer />
        <div className=" flex  items-center justify-end  mr-24">

          <form 
          onSubmit={handleSubmit}
          className="w-auto bg-white  p-4 shadow-xl rounded-xl mt-20">
            <div className="flex items-start justify-center ">
              <input
                type="text"
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                placeholder="Full Name"
                name="fullname"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className="flex items-start justify-center mt-6  ">
              <input
                type="text"
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                placeholder="Email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start justify-center mt-6  ">
              <input
                type="text"
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                placeholder="Phone Number"
                name="phone"
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>

            <div className="flex items-start justify-center mt-6  ">
              <input
                type="password"
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                placeholder="Password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-start justify-center mt-6  ">
              <input
                type="password"
                className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e)=>setconfirmPassword(e.target.value)}
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
              <div className="text-black text-lg font-normal">
                Do You have an account ?
              </div>

              <span className="mx-1"></span>

              <Link
                className="underline border-b border-blue text-blue-700"
                to="/expert/login"
              >
                Login
              </Link>
            </div>
          </form>

        </div>

      </div>
    </>
  );
};

export default ExpertSignupComponent;
