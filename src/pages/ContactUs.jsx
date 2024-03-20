import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image1 from "../assets/Image1.jpg"

const ContactUs = () => {
  return (
    <div style={{ maxWidth:"100vw" }}>
      <Navbar/>
      <div className="w-100" style={{ backgroundImage:`url(${Image1})`}}>

      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
