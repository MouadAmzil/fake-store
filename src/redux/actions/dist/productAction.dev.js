"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSelectProduct = exports.selectProduct = exports.setProducts = void 0;

var _actionTypes = require("../contants/action-types");

var setProducts = function setProducts(products) {
  return {
    type: _actionTypes.ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

exports.setProducts = setProducts;

var selectProduct = function selectProduct(product) {
  return {
    type: _actionTypes.ActionTypes.SELECT_PRODUCT,
    payload: product
  };
};

exports.selectProduct = selectProduct;

var removeSelectProduct = function removeSelectProduct() {
  return {
    type: _actionTypes.ActionTypes.REMOVE_SELECT_PRODUCT,
    payload: {}
  };
};

exports.removeSelectProduct = removeSelectProduct;