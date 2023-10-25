import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const userLoginCheck = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="flex navbar bg-base-100 shadow-xl    top-0 left-0 w-full z-50">
        <div className="navbar-start  w-full">
          <div className="dropdown"></div>

          <img className="mask mask-square h-20 " src="images/logo1.png" />
        </div>

        <div className="navbar-center  flex justify-center items-center  lg:flex w-full">
          <div className="w-full ">
            <p>
              <a className="btn m-1 bg-white ">About Us</a>
            </p>
          </div>
          <div className="w-full">
            <details className="relative">
              <summary className="m-1 btn bg-white cursor-pointer">
                Services
              </summary>
              <ul className="absolute left-0 mt-2 py-2 px-3 shadow-md menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full text-left  cursor-pointer"
                  >
                    Rescue
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full text-left cursor-pointer"
                  >
                    Adopt
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full text-left cursor-pointer"
                  >
                    Training
                  </button>
                </li>
              </ul>
            </details>
          </div>

          <div className="w-full ">
            <p>
              <a className="m-1 btn bg-white">Contact</a>
            </p>
          </div>
        </div>
        <div className="navbar-end flex justify-end items-center  w-full ">
          <div className="">
            <div className="flex  w-80 gap-6 ">
              {userLoginCheck ? (
                <div className="text-5xl mt-1 " onClick={() => navigate("/profile")}>
                  {" "}
                  <CgProfile />
                </div>
              ) : (
                <button
                  onClick={() => navigate("/register")}
                  className="btn bg-red-900 hover:bg-red-950 text-white font-bold  py-4 px-6 border  rounded-3xl "
                >
                  Sign Up
                </button>
              )}

              <div className="mr-2  ">
                {userLoginCheck ? (
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl "
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="btn bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl "
                  >
                    Login
                  </button>
                )}
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
