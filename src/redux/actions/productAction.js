import { ActionTypes } from "../contants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product
    }
}
export const removeSelectProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECT_PRODUCT,
        payload: {}
    }
}