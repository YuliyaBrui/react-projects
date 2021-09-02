import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))
