import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
      <div className="d-flex" style={{ height:"100vh"}}>
        <HomeNavbar />
        <div style={{ width:"94%", overflowY:"scroll"}}>
            <div className="Home text-white p-5">
            <div>
              <p>0420 600 185</p>
              <p>WELCOME TO</p>
              <p>PERTH PAINTING</p>
              <p>& DECO</p>
            </div>
          </div>
          <ContactComponent />
          <Footer />
        </div>
      </div>
  );
};

export default Home;
