import { combineReducers } from 'redux'
import {login_logout} from './login_logout'
import {courses} from './courses'


export const app_reducers = combineReducers({
  auth:login_logout,
  courses
})