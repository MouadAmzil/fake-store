import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./stylecard.css";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  console.log("Product From me ", products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className=" col-sm-4" key={id}>
        <div className="card">
          <Link to={`/Product/${id}`} style={{ textDecoration: "none" }}>
            <div className="card-header">
              <img src={image} alt="rover" />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">{category}</span>
              <h4 className="line-clamp">{title}</h4>
              <div className="user">
                <div className="user-info">
                  <h5>{price} £</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
