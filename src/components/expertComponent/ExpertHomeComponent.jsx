import { toast,ToastContainer } from 'react-toastify';
// import Lottie from 'lottie-react';

const ExpertHomeComponent = () => {

  return (
    <div>
      <div
        className="flex flex-col-reverse  lg:w-full h-screen md:1/2 sm:w-1/4  lg:flex-row md:flex-col sm:flex-col-reverse justify-center items-center "
        style={{
          backgroundImage: `url("/public/images/vector 2.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <ToastContainer/>

        {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkk */}

        <div className="relative flex flex-col text-gray-700 bg-amber-50 shadow-2xl w-full h-96 rounded-xl bg-clip-border justify-center items-center ml-6">
          <div className="">
           
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Who is expert ?
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-lg text-inherit">
              Expert is a pet trainer avilable,who provides better training for rescued pets.But for every signup trainer should wait for admin verification.Only verified trainer can upload training videos and have permisiion for chat with the client.So wait for admin verification.Click the blow button to admin verification
            </p>
          </div>
          <div className="p-6 pt-0">
          <button onClick={()=>{ 
            toast.success("Wait for admin verification", 
            { position: "top-right",autoClose:1000,})
          }}
                className="bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl mt-6  "
              >
                Click
              </button>
          </div>
        </div>
{/*lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll  */}





        <div className=" md:w-1/2 lg:w-full sm:1/4 flex items-center justify-center">
          <img src="/public/images/main.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExpertHomeComponent;
