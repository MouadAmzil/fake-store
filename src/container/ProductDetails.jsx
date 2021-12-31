import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  selectProduct,
  removeSelectProduct,
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import "./detailsCss.css";
import "./loading.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(id);
  const img = product.image;

  const fetchProuductSelected = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("err" + err);
      });
    dispatch(selectProduct(response.data));
  };
  useEffect(() => {
    if (id && id !== "") {
      fetchProuductSelected();
    }
    return dispatch(removeSelectProduct());
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      {Object.keys(product).length === 0 ? (
        <div>
          <div id="container">
            <div id="loader"></div>
          </div>
          <h4 className="h4"></h4>
        </div>
      ) : (
        <div className="main" key={product.id}>
          <div className="container">
            <div className="imag">
              <img
                style={{ width: "100%", height: "100%" }}
                src={img}
                alt={product.title}
              />
            </div>
            <div className="text-container">
              <span></span>
              <h1>{product.category}</h1>
              <p>{product.description}</p>
              <h1>{product.price}£</h1>
              <a href={"/"}>But Now</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
