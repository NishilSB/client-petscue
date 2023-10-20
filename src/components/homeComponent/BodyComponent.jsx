
const BodyComponent = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <p
          className="text-5xl "
          style={{
            position: "absolute",
            top: 200,
            left: 200, // Change left to right
            width: "40%",
            height: "auto",
          }}
        >
          <p className="font-semibold text-lg">Say Hi to Petscue</p>
          <p className="font-medium" >Pet <a className="text-red-700"> adopt & training</a><br/> in a single page</p>

        </p>

        <button className="bg-red-900 hover:bg-red-950 text-white font-bold py-4 px-8 border border-red-950 rounded-3xl " style={{
            position: "absolute",
            top: 400,
            left: 200, // Change left to right
            height: "auto",
          }}>
          Adopt a pet
        </button>

        <img
          className=""
          src="/public/images/vector 2.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />

        <img
          className=""
          src="/public/images/main.png"
          alt=""
          style={{
            position: "absolute",
            top: 70,
            right: 40, // Change left to right
            width: "40%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
};

export default BodyComponent;
