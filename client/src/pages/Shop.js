import React, { useState, useEffect } from "react";
import PageTopBanner from "../components/common/PageTopBanner";
import axios from "axios";

// Utility function to convert array buffer to base64
const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((result) => {
        setProducts(result.data.existingProducts);

        result.data.existingProducts.forEach((product) => {
          axios
            .get(`http://localhost:5000/products/images/${product.imageName}`, {
              responseType: "arraybuffer",
            })
            .then((response) => {
              const base64Image = arrayBufferToBase64(response.data);
              setImages((prevImages) => ({
                ...prevImages,
                [product._id]: base64Image,
              }));
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageTopBanner title="Shop" path="/shop" />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-1 mb-5" key={item._id}>
                  <div className="card h-100 border-0 shadow-sm">
                    {images[item._id] ? (
                      <img
                        className="card-img-top"
                        src={`data:image/jpeg;base64,${images[item._id]}`}
                        alt={item.pname}
                      />
                    ) : (
                      <div>Loading...</div>
                    )}
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item.pname}</h5>
                        {item.pprice}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className="btn btn-primary mt-auto"
                          href={`/product/${item._id}`}
                        >
                          View options
                        </a>
                      </div>
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

export default Shop;
