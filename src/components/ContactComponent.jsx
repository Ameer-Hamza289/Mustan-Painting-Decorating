import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";
import SubscribeAndContact from "./SubscribeAndContact";

const ContactComponent = () => {
  return (
    <>
      <div className="contact row mx-0 p-md-5 mb-4 flex-wrap">
        <div className="col-md-2 col-12 text-md-start text-center mb-md-0 mb-4">
          <img src={logo1} height={100} alt="logo" style={{ marginLeft:"20px" }} />
        </div>
        <div className="col-md-4 col-12 Menu" style={{ paddingLeft:'55px'}}>
          <p className="fw-bold text-md-start text-center" style={{ color: "#2AACE2", fontSize: "18px" }}> 
            Menu
          </p>
          <div className=" d-flex  flex-md-column justify-content-between gap-2 mt-md-4">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "black" }}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              style={{ textDecoration: "none", color: "black" }}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="col-md-3 col-12 mt-md-0 mt-3 d-flex flex-column text-md-start text-center">
          <p className="fw-bold " style={{ color: "#1F4497", fontSize: "18px" }}>
            Contact Us
          </p>
          <div className="mt-md-4 d-flex  flex-column  gap-2 pe-md-5 ">
            <Link
              to="tel:0420 600 185"
              style={{ textDecoration: "none", color: "black" }}
            >
              0420 600 185
            </Link>
            <Link
              to="mailto:info.perthpaintingdeco@yahoo.com"
              style={{
                textDecoration: "none",
                color: "black",
                wordBreak: "break-word",
              }}
            >
              info.perthpaintingdeco@yahoo.com
            </Link>
            <p>Perth, Western Australia</p>
          </div>
        </div>
        <div className="col-md-3 col-12 align-items-center d-flex flex-column">
          <p className="fw-bold" style={{ color: "#DF7AB1", fontSize: "18px" }}>
            Follow Us
          </p>
          <div className=" mt-md-4">
            <Link to="https://www.facebook.com" style={{ textDecoration: "none", color: "black" }}>
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <SubscribeAndContact/>
    </>
  );
};

export default ContactComponent;
