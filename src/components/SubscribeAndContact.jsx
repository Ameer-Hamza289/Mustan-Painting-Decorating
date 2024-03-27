const SubscribeAndContact = () => {
  return (
    <div
      className="row justify-content-end mx-0 gap-4 flex-wrap px-md-0 px-2"
      style={{ paddingBottom: "60px" }}
    >
      <div className="col-md-3 col-12 ">
        <p className="text-uppercase fw-bold fs-5" style={{ color: "#3BB54A" }}>
          Subscribe to our newsletter
        </p>
        <input
          type="text"
          className="w-100 m-0 p-3"
          placeholder="Enter your email here*"
          style={{ color: "black", borderBottom: "none", outline: "none" }}
        />
        <div
          className=" submit bg-black fw-bold text-white text-end pe-4 "
          style={{ paddingBlock: "25px", cursor: "pointer" }}
        >
          SUBMIT
        </div>
      </div>
      <div className="col-md-6 col-12 ">
        <p className="fs-5 fw-bold ">FOR ANY INFORMATION CONTACT US</p>
        <div style={{ maxWidth:"450px" }} >
          <input
            type="text"
            className="w-100 m-0 p-3"
            placeholder="First Name*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            className="w-100 m-0 p-3"
            placeholder="Last Name*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            className="w-100 m-0 p-3"
            placeholder="Email*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            className="w-100 m-0 p-3"
            placeholder="Phone"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            className="w-100 m-0 p-3"
            placeholder="Type your message here...*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <div
            className=" submit bg-black fw-bold text-white text-end pe-4 "
            style={{ paddingBlock: "25px", cursor: "pointer" }}
          >
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeAndContact
