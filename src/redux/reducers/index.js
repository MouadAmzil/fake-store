import { combineReducers } from 'redux'
import { productRducers, SelectProductReducers } from './productReducers'


const reducers = combineReducers({
    allproducts: productRducers,
    product: SelectProductReducers
})

export default reducers;





