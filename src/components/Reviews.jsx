import starRating from "../assets/rating-stars.png";

const Reviews = () => {
  return (
    <>
      <div className="py-5  reviews" style={{ paddingInline: "70px" }}>
        <p className="fw-bold mb-0 reviewHeading" style={{ fontSize: "46px", lineHeight:1.3 }}>
          WHAT PEOPLE ARE SAYING
        </p>
        <p className="fw-bold reviewHeading" style={{ fontSize: "46px" }}>
          ABOUT US...
        </p>
      </div>
      <div className="Service1Home" style={{ paddingBlock: "80px", paddingInline:"20px" }}>
        <div className="row">
          <div className="col-md-4 col-12 reviewCard " style={{ padding:"0px 50px" }}>
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              David is a very professional, excellent Tradesman. Highly
              recommend and would definitely use him again.
            </p>
            <p className="fw-bold mt-1">SCOTT</p>
          </div>
          <div className="col-md-4 col-12 reviewCard " style={{ padding:"0px 50px" }}>
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              Perth Painting & Deco just finished an excellent job painting our
              new house. David is a top professional doing an excellent job,
              with a very good price I definitely recommend him.
            </p>
            <p className="fw-bold mt-1">JC</p>
          </div>
          <div className="col-md-4 col-12 reviewCard mb-0" style={{ padding:"0px 50px" }}>
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              We have use Perth Painting & Deco 3 times now and cant fault them.
              David has done a fantastic job every time, very tidy and a great
              price. Would definitely recommend! Thanks David
            </p>
            <p className="fw-bold mt-1">ASHELY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
