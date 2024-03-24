import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WorkComponent from "../components/WorkComponent"

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className=" gallery w-100 h-100 "style={{ paddingBlock:"72px"}} >
      <div className="text-white" style={{ padding:"100px 80px" }}>
      <p className="fs-max fw-bold mb-0">THE PERTH PAINTING &</p>
      <p className="fs-max fw-bold ">DECO GALLERY</p>
      <p className="fs-5">Check out our best work around Perth.</p>
      </div>
      <div className="works " style={{ paddingLeft:"300px" }}>
      

    {/* masonry layout  */}

    <div className="container">
      <WorkComponent/>
 
  {/* <div className="row d-flex flex-wrap justify-content-between">
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={test} className="card-img-top" alt="Image 1" />
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={test} className="card-img-top" alt="Image 2" />
      </div>
    </div>
  </div> */}
</div>


    {/* masonry layout  ends*/}


      </div>
    </div>
    <ContactComponent/>
    <Footer/>
    </>
  )
}

export default Gallery
