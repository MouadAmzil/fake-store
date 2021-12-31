"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _productReducers = require("./productReducers");

var reducers = (0, _redux.combineReducers)({
  allproducts: _productReducers.productRducers,
  product: _productReducers.SelectProductReducers
});
var _default = reducers;
exports["default"] = _default;