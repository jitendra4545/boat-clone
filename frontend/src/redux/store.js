import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { reducer as AuthReducer } from './Authreducer/reducer'
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as CartReducer} from './CartReducer/reducer'
import {reducer as AddressReducer} from './AddressReducer/reducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({AuthReducer,AppReducer,CartReducer,AddressReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))