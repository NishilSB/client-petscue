import { useNavigate } from "react-router-dom";

const BodyComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div
        className="flex flex-col-reverse  lg:w-full h-screen md:1/2 sm:w-1/4  lg:flex-row md:flex-col sm:flex-col-reverse bg-green-400 "
        style={{
          backgroundImage: `url("/public/images/vector 2.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex md:w-1/2 flex-col  lg:w-full sm:w-full items-center  justify-center">
          <div className=" lg:w-9/12 md:w-screen bg-red-400 sm:w-screen ">
            <div>
            <h1 className="text-4xl">Say Hi to Petscue</h1>
            <p className=" lg:text-6xl sm:text-2xl ">
              {" "}
              Pet <a className="text-red-700 "> adopt & training</a>
              <br /> in a single page
            </p>
            <div className="">
              <button
                onClick={() => navigate("/rescue")}
                className="bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl mt-6  "
              >
                Adopt
              </button>
              <button className="bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl mt-6 ml-4 ">
                Training
              </button>
              <button className="bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl mt-6  ml-4">
                Rescue
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:w-1/2 lg:w-full sm:1/4 flex items-center justify-center">
          <img src="/public/images/main.png" alt="" />
        </div>
      </div> */}
      <div className="bg-red-400 w-screen h-screen lg:flex  ">
        <div className="bg-yellow-200 flex lg:w-full md:w-1/2 h-screen  flex-col items-center justify-center">
          <div className="bg-red-400 w-[60%] h-36 flex  ">
            <div>
              <p className="font-semibold lg:text-3xl md:text-2xl sm:text-1xl">
                Say Hi to Petscue
              </p>

              <p className=" mt-1 lg:text-4xl md:text-3xl sm:text-2xl">
                Pet <span className="text-red-800">adopt & training</span>
              </p>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl mt-2">
                In a single page
              </p>
            </div>
          </div>
          <div className="bg-violet-500 lg:w-[60%]  h-20 flex ">
            <div className="bg-gray-500  lg:w-full md:w-1/2 sm:w-1/4  h-16">
              <button
                onClick={() => navigate("/rescue")}
                className="bg-red-900 hover:bg-red-950 text-white font-bold lg:w-32 md:w-28 sm:w-18 h-14 border border-red-950 rounded-3xl   "
              >
                Rescue
              </button>
            </div>
            <div className="bg-gray-100 w-full  h-16">
              <button className="bg-red-900 hover:bg-red-950 text-white font-bold lg:w-32 md:w-24 sm:w-18 h-14 border border-red-950 rounded-3xl   ">
                Adopt
              </button>
            </div>
            <div className="bg-gray-800 w-full  h-16">
              <button className="bg-red-900 hover:bg-red-950 text-white font-bold lg:w-32 md:w-24 sm:w-18 h-14 border border-red-950 rounded-3xl   ">
                Training
              </button>
            </div>
          </div>
        </div>
        <div className="bg-orange-300 w-full h-screen md:w-full ">
        <img src="/public/images/main.png" alt="" />


        </div>
      </div>
    </>
  );
};

export default BodyComponent;
