import Point1 from "../assets/point-1.png";
import Point2 from "../assets/point-2.png";
import Point3 from "../assets/point-3.png";
import Point4 from "../assets/point-4.png";

const ExpectWIthUs = () => {
  return (
    <div className=" row m-0 py-4">
      <div className="d-md-none d-block col-md-5 col-12 px-4  mb-2">
        <p className="fs-max fw-bold text-center" style={{ lineHeight: 1.3 }}>
          WHAT TO EXPECT WITH US!!
        </p>
        <p className="mt-4" style={{ fontSize: "18px" }}>
          At Mustan Painting & Deco, our aim is to make sure your experience
          with us is exceptional. Our team goes above and beyond to ensure your
          satisfaction with every project. Expect nothing but the highest
          quality and professionalism from us. Don&apos;t just take our word for it –
          see what our satisfied customers have to say in our reviews and
          testimonials!
        </p>
      </div>
      <div className="col-md-7 col-12 d-flex flex-wrap px-0">
        <div
          className="col-md-6 col-12 HomeService d-flex align-items-center justify-content-center "
          style={{ minHeight: "300px" }}
        >
          <div>
            <img src={Point1} alt="point" />
          </div>
        </div>
        <div
          className="col-md-6 col-12 Service1Home d-flex align-items-center justify-content-center "
          style={{ minHeight: "300px" }}
        >
          <img src={Point2} alt="point" />
        </div>
        <div
          className="col-md-6 col-12 Service1Home d-flex align-items-center justify-content-center "
          style={{ minHeight: "300px" }}
        >
          <img src={Point3} alt="point" />
        </div>
        <div
          className="col-md-6 col-12 HomeService d-flex align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <img src={Point4} alt="point" />
        </div>
      </div>

      <div className="d-md-inline-block d-none col-md-5 col-12 px-5">
        <p className="fs-max fw-bold" style={{ lineHeight: 1.2 }}>
          WHAT TO EXPECT WITH US!!
        </p>
        <p className="mt-4" style={{ fontSize: "18px" }}>
          At Perth Painting & Deco goal is to ensure that you’re experience with
          us is a pleasant one, our team will stop at nothing to ensure that you
          are thrilled with your project. With us, you can expect the best of
          the best, nothing less filled with quality and professionalism. Still
          not convinced? Check out our reviews and testimonials, they speak for
          themselves!
        </p>
      </div>
    </div>
  );
};

export default ExpectWIthUs;
