import { combineReducers } from 'redux'
import {login_logout} from './login_logout'

export const app_reducers = combineReducers({
  auth:login_logout
})