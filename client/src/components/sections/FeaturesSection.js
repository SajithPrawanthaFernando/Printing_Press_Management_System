import React from "react";
import TransportImg from "../../assets/images/transport.png";

const FeaturesSection = () => {
  return (
    <>
      <section>
        <div className="container p-5">
          <div className="text-center">
            <h4>100% SOLID PRINTING</h4>
            <h2>
              Reduce costs and 
              <span>
                deliver <br /> faster
              </span>{" "}
              with web print
            </h2>
            <p>
              We have all the equipment, know-how and everything you will need
              to receive fast,{" "}
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="card border-0 shadow p-2 my-3">
                <div className="d-flex flex-column align-items-center p-1">
                  <i className="bi bi-calendar-check fs-1"></i>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Fast Turnaround Time</h5>
                  <p className="card-text">
                    Get your orders printed and shipped quickly. We ensure that
                    your products are delivered to you in record time without
                    compromising quality.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow p-2 my-3">
                <div className="d-flex flex-column align-items-center p-1">
                  <i className="bi bi-calendar-check fs-1"></i>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">High-Quality Prints</h5>
                  <p className="card-text">
                    Experience the best in print quality. Our advanced printing
                    technology guarantees sharp, vibrant, and durable prints for
                    all your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center d-none d-md-block">
              <img src={TransportImg} alt="TransportImg" />
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow p-2 my-3">
                <div className="d-flex flex-column align-items-center p-1">
                  <i className="bi bi-calendar-check fs-1"></i>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Affordable Pricing</h5>
                  <p className="card-text">
                    Save on printing costs without sacrificing quality. We offer
                    competitive pricing and bulk discounts to meet your budget
                    requirements.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow p-2 my-3">
                <div className="d-flex flex-column align-items-center p-1">
                  <i className="bi bi-calendar-check fs-1"></i>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Eco-Friendly Options</h5>
                  <p className="card-text">
                    Choose from a variety of sustainable printing options. We
                    offer eco-friendly paper and inks to help reduce your carbon
                    footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
