import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from '@aftonbladet/redux-api-middleware'
import reducer from './reducers/index'
import { fromJS } from 'immutable'

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore)

const initialState = fromJS({})

export default () => { return createStoreWithMiddleware(reducer, initialState) }

