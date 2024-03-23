import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceImage from "../assets/serviceMain.png";
import calculator from "../assets/calculator.png";
import homeIcon from "../assets/home-icon.png";
import homeIcon2 from "../assets/home-icon2.png";
import wall from "../assets/wall-icon.png";

const Services = () => {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Navbar />
      <div
        className="w-100  text-white"
        style={{
          backgroundImage: `url(${ServiceImage})`,
          minHeight: "245px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <div className="py-5 px-7 z-2 w-100 h-100 ">
          <p className=" fw-bold fs-2 text-uppercase">OUR SERVICES</p>
          <p className="text-uppercase  fw-bold fs-max">WHAT WE DO!</p>
          <p className="text-uppercase  fw-bold fs-2">
            RESIDENTIAL, COMMERCIAL & FEATURE WALLS
          </p>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-6 col-12 py-5 px-5 bg-black d-flex">
          <h6 className="text-white my-auto vertical-text">
            Calculator Based on New Builds (Estimate Only)
          </h6>
          <img src={calculator} height={1000} width={500} alt="calculator" />
        </div>

        <div className="col-md-6 col-12 p-5 bg-secondary text-white">
          {/* <div className="text-end m-0"> */}
          <img
            src={homeIcon}
            height={40}
            alt="home icon"
            className="d-block ms-auto "
          />
          {/* </div> */}
          <span className="fs-max fw-bold ">RESIDENTIAL</span>
          <hr />
          <div className="my-4">
            <p className="mt-3">
              Residential painting services of the highest calibre are what we
              specialise in at Perth Painting & Deco. We work closely with you
              at every stage to make sure you are happy with the outcome in the
              finish.
            </p>
            <p style={{ marginTop: "2rem" }}>
              A new coat of paint applied to the interior or exterior of your
              home by our qualified team of experts can significantly improve
              it. Whether you want to just brighten up a tired-looking façade or
              want to give the interiors of your home a makeover, our
              residential painting service will deliver the highest quality
              results for your home remodelling project.
            </p>
          </div>
          <div className="my-5 pt-4 ">
            <img
              src={homeIcon2}
              height={40}
              alt="home icon"
              className="d-block ms-auto "
              style={{ marginBottom: "-15px" }}
            />
            <span className="fs-max fw-bold ">COMMERCIAL </span>
            <hr />
            <p>
              We are aware that commercial business frequently requires working
              after hours and has tight deadlines, at Perth Painting & Deco, we
              are aware of this. Thanks to our considerable expertise dealing
              with a wide range of clients in a variety of industries, you can
              depend on us to accomplish a painting job just as you imagined it.
            </p>
            <p>
              Having previously worked on industrial projects, we are thrilled
              to serve as your single point of contact for project management.
              We go above and above to finish your assignment, even putting in
              extra time on the weekends and on holidays. Contact us right away
              for solutions that truly showcase the brilliance of your business
              and brand.
            </p>
          </div>
          <div className="my-5 pt-4 pb-lg-5  ">
            <img
              src={wall}
              height={40}
              alt="home icon"
              className="d-block ms-auto "
            />
            <span className="fs-max fw-bold ">FEATURE WALLS </span>
            <hr />
            <p>
              For any room in your home, Perth Painting & Deco can design and
              paint a feature wall. One of the best options you could make to
              improve the appearance of the interior of your home is to build a
              feature wall. Whatever feature wall you decide on, you will love
              the wonderful advantages that come with it.
            </p>
            <p>
              You have a wonderful opportunity with feature walls to experiment
              with contrasting colours, forms, textures, and patterns that
              precisely suit your preferences. This is one of the quickest and
              cheapest ways you can immediately brighten up your area.
            </p>
            <p>
              A feature wall can significantly alter the feel of your living
              area. You are free to achieve this based on your personal tastes
              and preferences. For more information get in touch with us, and
              see how we can liven up your home.
            </p>
          </div>
        </div>
      </div>
      <div className="fluid-container">
        <div className="row m-0">
          <div
            className="col-12 bg-black py-4 px-4 enquire text-end text-white "
            style={{ height: "75px" }}
          >
            Contact {">"}
          </div>
        </div>
      </div>
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Services;
