
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
       
        {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkk */}

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full h-96 rounded-xl bg-clip-border justify-center items-center ml-6">
          <div className="">
            {/* <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="img-blur-shadow"
              layout="fill"
            /> */}
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Who is expert ?
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              click the button for admin verification kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmmmmmmmmmmmmmmmmmmmmmmm
            </p>
          </div>
          <div className="p-6 pt-0">
          <button
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
