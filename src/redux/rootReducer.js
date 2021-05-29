import { combineReducers } from "redux";

import EmployeesReducer from './reducers/EmployeesReducer'

const rootReducer = combineReducers({
  Employees: EmployeesReducer,
});

export default rootReducer;