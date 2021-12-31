import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: []
}

export const productRducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return initialState //{ ...state, products: payload };
    }
}

export const SelectProductReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECT_PRODUCT:
            return {};
        default: return state;
    }
}