const RescueAdoptComponent = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className=""
          src="/public/images/vector 2.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            width: "80%", // Adjust the width as needed
            height: "auto",
            display: "flex", // Use flexbox to arrange elements vertically
            flexDirection: "column", // Arrange elements in a row
            justifyContent: "space-between", // Space the elements evenly
            alignItems: "center", // Center items vertically
            marginBottom: "1rem", // Add space between the form and the button
            position: "absolute",
          }}
        >
          <form
            className="w-auto bg-white p-4 shadow-2xl rounded-xl mt-36
        36"
            style={{
              width: "80%", // Adjust the width as needed
              height: "auto",
              display: "flex", // Use flexbox to arrange elements vertically
              flexDirection: "row", // Arrange elements in a row
              justifyContent: "space-between", // Space the elements evenly
              alignItems: "center", // Center items vertically
              marginBottom: "1rem", // Add space between the form and the button
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="flex items-start justify-center">
                <input
                  type="text"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-16" // Reduced width here
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex items-start justify-center mt-6">
                <input
                  type="text"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-14" // Reduced width here
                  placeholder="Location"
                />
              </div>

              <div className="flex items-start justify-center mt-6">
                <select
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-24" // Reduced width here
                  placeholder="District"
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

            <div style={{ flex: 1 }}>
              <div className="flex items-start justify-center">
                <input
                  type="date"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-20 " // Reduced width here
                  placeholder="Date"
                />
              </div>
              <div className="flex items-start justify-center">
                <input
                  type="time"
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-24 mt-6" // Reduced width here
                  placeholder="Date"
                />
              </div>

              <div className="flex items-start justify-center mt-6">
                <select
                  className="bg-white focus:bg-amber-200 hover:bg-amber-200 border border-amber-200 rounded-md py-2 px-12" // Reduced width here
                  placeholder="District"
                >
                  <option value="" disabled selected>
                    Select Health Condition
                  </option>
                  <option value="123"> Select Health Condition</option>
                  <option value="123">No Body Damage</option>
                  <option value="789">Need Urgent Help</option>
                </select>
              </div>
            </div>
          </form>
          <div>
            <img src="/public/images/imageicon.png" alt=" " className="w-24" />
          </div>

          <button
            type="submit"
            className="bg-red-900 text-2xl text-white font-bold py-3 px-6 mt-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out  "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default RescueAdoptComponent;
