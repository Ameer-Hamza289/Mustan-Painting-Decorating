import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import HomeGallery from "../components/HomeGallery";
import ExpectWIthUs from "../components/ExpectWIthUs";
import Reviews from "../components/Reviews";
import IdeaBrief from "../components/IdeaBrief";
import Services from "../components/Services";
import Performance from "../components/Performance";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
  return (
    <div className="d-md-flex" style={{ height: "100vh" }}>
      <HomeNavbar />
      <div className="HomeView" >
        <div className="Home text-white w-100">
          <WelcomeSection />
          <Services />
          <Performance />
          <HomeGallery />
          <ExpectWIthUs />
          <Reviews />
          <IdeaBrief />
        </div>
        <ContactComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
