import {FETCH_EMPLOYEES, SELECT_EMPLOYEES, UNSELECT_EMPLOYEES} from '../types';

const initialState = {
  employees: [],
  select: [],
  loading: true,
  error: null
};

const EmployeesReducer = (state = initialState, action) => {
  switch (action.type) {
	case FETCH_EMPLOYEES:
	  return {
		...state,
		employees: action.payload,
		loading: false,
		error: null
	  }
	case SELECT_EMPLOYEES:
	  return {
		...state,
		select: [action.payload, ...state.select],
		loading: false,
		error: null
	  };
	case UNSELECT_EMPLOYEES:
	  return {
		...state,
		select: action.payload,
		loading: false,
		error: null
	  };
	default:
	  return {...state};
  }
};

export default EmployeesReducer;