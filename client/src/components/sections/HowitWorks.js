import React from "react";
import HowImg1 from "../../assets/images/how1.jpg";
import HowImg2 from "../../assets/images/61WT5BQ+j6L._AC_UY1000_.jpg";
import HowImg3 from "../../assets/images/q5Z1obmDWCwIbjWdSJfyHFaSdJKDB0nXvUQ82cDDLIg.webp";

const HowitWorks = () => {
  const howItWorksData = [
    {
      id: 1,
      img: HowImg1,
      title: "Select A Product",
      des: "Browse through our extensive catalog and choose the product that fits your needs.",
    },
    {
      id: 2,
      img: HowImg2,
      title: "Customize Your Design",
      des: "Use our easy-to-use design tools to personalize your product. You can also upload your own designs.",
    },
    {
      id: 3,
      img: HowImg3,
      title: "Place Your Order",
      des: "Review your order, make any necessary adjustments, and proceed to checkout.",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="container p-5">
          <div className="text-center">
            <h4>HOW IT’S WORK</h4>
            <h2>
              Order For <span>Business</span> Or <br /> <span>Personal</span>{" "}
              Use
            </h2>
            <p>
              We have all the equipment, know-how and every thing you will need
              to receive fast,{" "}
            </p>
          </div>

          <div className="row pt-5">
            {howItWorksData.map((item) => {
              return (
                <div key={item.id} className="col-lg-4">
                  <div className="mb-3">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.img}
                    />
                    <div className="text-center py-3 px-4 d-flex flex-column align-items-center">
                      <div
                        style={{
                          background: "#EA454C",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                        }}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <h3 className="text-white m-0">{item.id}</h3>
                      </div>
                      <h5 className="my-3">{item.title}</h5>
                      <p className="card-text">{item.des}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowitWorks;
