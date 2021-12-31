import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import "./stylecard.css";
import ProductComponent from "./ProductComponent";

const ListProduct = () => {
  //const Products = useSelector((state) => state);

  const dispatch = useDispatch();

  //TODO: This Methode Will be called in useEffect
  const fetchApi = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
  };

  //TODO: ComponentWillMount :)
  useEffect(() => {
    fetchApi();
  }, []);

  //TODO: Return Child Component
  return (
    <div className="container mt-5">
      <div className="row justify-content-around">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ListProduct;
