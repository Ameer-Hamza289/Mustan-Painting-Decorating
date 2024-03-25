import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <HomeNavbar />
      <div style={{ width: "94%", overflowY: "scroll" }}>
        <div className="Home text-white p-5">
          <div>
            <span style={{ fontWeight: 700, fontSize: "24px" }}>
              0420 600 185
            </span>
            <p className="fs-max">WELCOME TO</p>
            <p className="fs-max">PERTH PAINTING</p>
            <p className="fs-max">& DECO</p>
            <div>
              <span>
                +12 Years experience. Workmanship guaranteed & fixed price
                quotes.
              </span>
            </div>
          </div>
        </div>
        <ContactComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
