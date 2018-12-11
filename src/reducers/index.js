import { combineReducers } from 'redux'
import {login} from './login'

export const app_reducers = combineReducers({
  auth:login
})