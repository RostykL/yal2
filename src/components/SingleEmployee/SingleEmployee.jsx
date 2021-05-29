import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SELECT_EMPLOYEES, UNSELECT_EMPLOYEES} from "../../redux/types";

import './singleEmployee.css'


export default function SingleEmployee({fullName, index, isChecked}) {
  const active = 'active' + index;
  const notActive = 'not active' + index;

  const data = useSelector(state => state.Employees);
  const [checked, setChecked] = useState(isChecked);
  const dispatch = useDispatch();

  const handleNotActiveSubmit = (e) => {
	if (e.target.checked) {
	  let employee = data.select.map(el => el.id === index ? el.checked = false : el)
		  .filter(el => el !== index);

	  localStorage.setItem('employees', JSON.stringify(data.employees.map(el => {
		if (el.id === index) {
		  el.checked = false;
		}
		return el;
	  })))

	  dispatch({type: UNSELECT_EMPLOYEES, payload: employee})
	  setChecked(false)
	}
  }
  const handleActiveSubmit = (e) => {
	if (e.target.checked) {
	  let employee = data.employees.filter(el => el.id === index)[0]
	  employee.checked = e.target.checked
	  localStorage.setItem('employees', JSON.stringify(data.employees.map(el => {
		if (el.id === index) {
		  el.checked = true;
		}
		return el;
	  })))
	  dispatch({type: SELECT_EMPLOYEES, payload: employee})
	  setChecked(true)
	}
  }


  return (
	  <div className={'singleEmployee'}>
		<div className="fullName">{fullName}</div>
		<label htmlFor={active}>
		  <input id={active} checked={checked} className={'singleInput'} type={"checkbox"}
				 onChange={(e) => handleActiveSubmit(e)}
		  />
		  active
		</label>
		<label htmlFor={notActive}>
		  <input id={notActive} checked={!checked} className={'singleInput'} type={"checkbox"}
				 onChange={(e) => handleNotActiveSubmit(e)}
		  />
		  not active
		</label>
	  </div>
  );
}