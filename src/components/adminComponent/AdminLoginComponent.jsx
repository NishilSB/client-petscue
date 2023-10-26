import { Link } from "react-router-dom"

const AdminLoginComponent = () => {
  return (

    <div
    className=" h-screen"
    style={{
      backgroundImage: 'url("public/images/expert 1.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
     
    <div className=" flex  items-center justify-end  mr-24">

      <form 
      className="w-auto bg-white  p-4 shadow-xl rounded-xl mt-20">
        <div className="flex items-start justify-center ">
          <input
            type="text"
            className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex items-start justify-center mt-6  ">
          <input
            type="password"
            className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14"
            placeholder="Password"
            name="password"
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
            Login
          </button>
        </div>

      
      </form>

    </div>

  </div>

  )
}

export default AdminLoginComponent
