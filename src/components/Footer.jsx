import backgroundImage from "../assets/background-Footer.png";

const Footer = () => {
  return (
    <div
      style={{
        padding: "20px 40px",
        backgroundImage: `url(${backgroundImage})`,
        // position: "fixed",
        // bottom: 0,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center"
      }}
    >
      <p className="m-0 text-md-start text-center">
        &#169; Copyright. All Rights Reserved. Mustan Painting and Decorating
      </p>
      <p className="m-0 d-md-inline-block d-none">
        Website by{" "}
        <span  style={{ fontWeight: "bold", fontSize: "20px" }}>
          Ameer Hamza
        </span>
      </p>
    </div>
  );
};

export default Footer;
