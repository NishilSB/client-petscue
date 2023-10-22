import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../api/axios";
import axios from "axios";

const ProfileComponent = () => {
  const [Details, setDetails] = useState("");
  const fileInputRef = useRef(null);
  const [image, setImage] = useState("");

  const { data } = JSON.parse(localStorage.getItem("user"));
  console.log(data.result.email);
  const email = data.result.email;
  const userDetails = async () => {
    const userData = await axiosInstance.post("/user/login", { email });

    console.log(userData.data.result);

    setDetails(userData.data.result);
  };

  useEffect(() => {
    userDetails();
  }, []);

  const handleSvgClick = () => {
    fileInputRef.current.click();
  };

  const userImage = async (e) => {
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

          if (result.data.secure_url) {
            changeImage(result.data.secure_url);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const changeImage = async (newImage) => {
    console.log(image);
    await axiosInstance.post("/user/storeImage", { email, image : newImage });
  };

  useEffect(() => {
    axiosInstance.post("/user/login", { email }).then((data) => {
      console.log(data.data.result.profileImage, "fffffffffffff");

      setImage(data.data.result.profileImage);
    });
  }, [email]);

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
        <div className=" w-full h-full flex justify-center items-center ">
          <div>
            <p className="font-semibold text-lg">Name: {Details.name}</p>
            <br />
            <p className="font-semibold text-lg">
              Phone Number: {Details.phone}
            </p>
            <br />
            <p className="font-semibold text-lg">Email: {Details.email}</p>
          </div>
        </div>
        <div className=" w-full h-full justify-center items-center  flex">
          <div className="flex-col">
            {image ? (
              <div className="  w-80 h-80  rounded-full">
                <img className="w-80 h-80 rounded-full" src={image} alt="" />
              </div>
            ) : (
              <div className="  w-80 h-80  rounded-full">
                <img className="w-80 h-80" src="/images/profile.png" alt="" />
              </div>
            )}

            <button
              className="bg-red-900 h-12 mt-4 ml-20 text-white w-36 rounded-lg"
              onClick={handleSvgClick}
            >
              Edit image
            </button>

            <div className="ml-3 p-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={userImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
