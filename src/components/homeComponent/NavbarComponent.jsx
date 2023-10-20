
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <>
   
      <div className="flex navbar bg-base-100 shadow-xl    top-0 left-0 w-full z-50">
        <div className="navbar-start  w-full">
          <div className="dropdown"></div>

          <img className="mask mask-square h-20" src="images/logo1.png" />
        </div>

        <div className="navbar-center  flex justify-center items-center  lg:flex w-full">
         
          <div className="w-full ">
            <p>
              <a className="btn m-1 bg-white ">About Us</a>
            </p>
            </div>
            <div className="w-full ">
            <p tabIndex={0}>
              <details className="dropdown">
                <summary className="m-1 btn bg-white">Services</summary>
                <ul className="p-2 shadow  menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {!localStorage.getItem("userToken") ? (
                    <li>
                      <button onClick={() => navigate("/login")}>Rescue</button>
                    </li>
                  ) : (
                    
                    <li>
                      <button onClick={() => navigate("/adopt")}>Rescue</button>
                    </li>


)}

                  <li>
                    <button onClick={() => navigate("/login")}>Training</button>
                  </li>
                </ul>
              </details>
            </p>
</div>
<div className="w-full ">
            <p>
              <a className="m-1 btn bg-white">Contact</a>
            </p>
            </div>
       
        </div>
        <div className="navbar-end flex justify-end items-center  w-full">
          <div className="">
          {!localStorage.getItem("userToken") ? (
            <div className="flex">
              <div className="mr-2">
                <button
                  onClick={() => navigate("/login")}
                  className="btn bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl "
                >
                  Login
                </button>
              </div>

              <div>
                <button
                  onClick={() => navigate("/register")}
                  className="btn bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-6 border border-red-950 rounded-3xl "
                >
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <img
                onClick={() => {
                  navigate("/");
                }}
                src="/public/images/🦆 icon _profile circle_.png"
                className="w-14 mr-3"
              />

              <button
                onClick={handleLogout}
                className="btn bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-6 mr-9 border border-red-950 rounded-3xl "
              >
                {" "}
                Log out{" "}
              </button>
            </div>
          )}
          </div>
        </div></div>
    </>
  );
};

export default NavbarComponent;
