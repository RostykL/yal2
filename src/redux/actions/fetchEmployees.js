import {FETCH_EMPLOYEES} from '../types'

export default function FetchEmployees() {
  return async dispatch => {
	const data = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users", {method: 'GET'});
	const res = await data.json();
	let emp = res.map(el => ({...el, checked: false}))
	if(!JSON.parse(localStorage.getItem('employees'))) {
	  localStorage.setItem('employees', JSON.stringify(emp))
	  dispatch({
		type: FETCH_EMPLOYEES,
		payload: JSON.parse(localStorage.getItem('employees')),
	  });
	} else {
	  dispatch({
		type: FETCH_EMPLOYEES,
		payload: JSON.parse(localStorage.getItem('employees')),
	  });
	}

  }
}