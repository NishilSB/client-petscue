import axios from "axios";
import axiosInstance from "../../api/axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const RescueComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("")
  const [health, setHealth] = useState("");
  const fileInputRef = useRef(null);
   const [image,setImage] = useState("")

  const regex_mobile = /^\d{10}$/;
  const petImage = async (e) => {
      if (e.target.files) {
        const formData = new FormData();
        const imageUrl = [];
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          formData.append("file", file);
          formData.append("uplode_preset", "Petscue");
  
          try {
            const result = await axios.post(
              "https://api.cloudinary.com/v1_1/dkglmh9ai/image/upload?upload_preset=petscue",
              formData
            );
  
            console.log(result.data.secure_url);
  
            imageUrl.push(result.data.secure_url);
            setImage(result.data.secure_url);
           
            console.log(result.data.secure_url);
  
          
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
  const handleSubmit= async (e)=>{
    e.preventDefault()


    if (!name && !phone && !district && !date && !location && !health && !image) {
        toast.error("Fill all the fields", {
          position: "top-right",
          autoClose: 3000,
        });
      }  else if (regex_mobile.test(phone) == false) {
        toast.error("enter valid phone number", {
          position: "top-right",
          autoClose: 3000,
        });
      }else{
        try {
            axiosInstance.post("/user/rescueForm", {name,phone,district,date,location,health,image});
            toast.success("details added successfully", {
                position: "top-right",
                autoClose: 1000,
              });
          } catch (error) {
            console.log(error);
          }
        }
        
      }
      
  const handleSvgClick = () => {
    fileInputRef.current.click();
  };

  

  return (
    <>
      <div
        className="relative flex  w-full h-screen"
        style={{
          backgroundImage: `url("/public/images/vector 2.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ToastContainer />
        <form
        onSubmit={handleSubmit}
         className=" w-full h-full flex justify-center items-center ">
          <div className="w-4/5 h-4/5 bg-white px-36 py-8 shadow-2xl rounded-xl  ">
            <div className="flex">
              <div className="w-4/5 h-full flex justify-center items-start ">
                <div className="flex flex-col items-center justify-center">
                  <div className=" text-4xl text-red-900 font-semibold items-center justify-center mt-7">
                    <h1>Informer Details</h1>
                  </div>

                  <input
                    type="text"
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-16 mt-10"
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                  />

                  <input
                    type="text"
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-16 mt-6"
                    placeholder="Phone"
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <select
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-24 mt-6"
                    placeholder="District"
                    onChange={(e)=>setDistrict(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select District
                    </option>
                    <option value="Tvm"> Select District</option>
                    <option value="Tvm">Tvm</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Alappuza">Alappuza</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Eranakulam">Eranakulam</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="789">Thrissur</option>
                    <option value="Thrissur">Malappuram</option>
                    <option value="Kozikode">Kozikode</option>
                    <option value="Wayanad">Wayanad</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasagod">Kasagod</option>
                  </select>
                </div>
              </div>

              <div className=" w-4/5 h-full flex justify-center items-start  mx-8">
                <div className="flex flex-col items-center justify-center">
                  <div className=" text-4xl text-red-900 font-semibold items-center justify-center mt-7">
                    <h1>Pet Details</h1>
                  </div>
                  <input
                    type="text"
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-16 mt-8"
                    placeholder="Location"
                    onChange={(e)=>setLocation(e.target.value)}
                  />

                  <input
                    type="date"
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-20 mt-6"
                    placeholder="Date"
                    onChange={(e)=>setDate(e.target.value)}
                  />
                  <select
                    className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-16 mt-6" // Reduced width here
                    placeholder="Health"
                    onChange={(e)=>setHealth(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select Health Condition
                    </option> 
                    <option value="No Body Damage">No Body Damage</option>
                    <option value="Need Urgent Help">Need Urgent Help</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="flex flex-col items-center mt-10">
                <div>
                    {image?<img
                    src={image}
                    alt=" "
                    className="w-24"
                   
                  />:
                  <img
                    src="/public/images/imageicon.png"
                    alt=" "
                    className="w-24"
                    required
                    onClick={handleSvgClick}
                  />
                  }
                </div>

                <div className="ml-3 p-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                required
                onChange={petImage}
              />
            </div>

                <div>
                  <button
                    type="submit"
                    className="bg-red-900 text-2xl text-white font-bold py-3 px-6 mt-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out  "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RescueComponent;
