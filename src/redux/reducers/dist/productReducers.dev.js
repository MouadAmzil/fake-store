"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProductReducers = exports.productRducers = void 0;

var _actionTypes = require("../contants/action-types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  products: []
};

var productRducers = function productRducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes.ActionTypes.SET_PRODUCTS:
      return _objectSpread({}, state, {
        products: payload
      });

    default:
      return initialState;
    //{ ...state, products: payload };
  }
};

exports.productRducers = productRducers;

var SelectProductReducers = function SelectProductReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case _actionTypes.ActionTypes.SELECT_PRODUCT:
      return _objectSpread({}, state, {}, payload);

    case _actionTypes.ActionTypes.REMOVE_SELECT_PRODUCT:
      return {};

    default:
      return state;
  }
};

exports.SelectProductReducers = SelectProductReducers;