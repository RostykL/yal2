import './employees.css'

import SingleEmployee from "../SingleEmployee/SingleEmployee";

import {alphabet} from "../../helpers/alphabet";
import {sortEmployees} from '../../helpers/sortedEmployees'

import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";

export default function Employees() {
  const data = useSelector(state => state.Employees)
  let sortedEmployees = useCallback(
	  () => sortEmployees(data.employees, alphabet),
	  [data])();


  if (!data.loading) {
	return (
		<div className="employees">
		  <div className="header">Employees</div>
		  <div className="body employees-body">
			{alphabet.map((letter) => {
			  if (sortedEmployees[letter].length === 0) {
				return <div className="body-col" key={letter}>
				  <div className="letter">{letter}</div>
				  {[0].map(() => <span key={-2}>----</span>)}
				</div>
			  }
			  return <div className="body-col" key={letter}>
				<div className="letter">{letter}</div>
				{sortedEmployees[letter].map((el) => <SingleEmployee fullName={`${el.lastName} ${el.firstName}`}
																	 key={el.id}
																	 index={el.id}
				isChecked={el.checked}/>)}
			  </div>
			})}
		  </div>
		</div>
	);
  } else {
	return <div>Loading...</div>
  }
}
