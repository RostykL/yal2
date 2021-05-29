import './employeesBirthday.css'
import {useSelector} from "react-redux";
import {months} from '../../helpers/months'
import {sortByMonth} from "../../helpers/sortByMonth";

export default function EmployeesBirthday() {
  const data = useSelector(state => state.Employees);
  const sortedMonth = sortByMonth(data.employees.filter(el => el.checked === true) ?? data.select)

  return (
	  <div className="employeesBirthday">
		<div className="header">Employees Birthday</div>
		<div className="body-birthday">
		  {months.map(month => {
			if (sortedMonth[month].length !== 0) {
			  return <div key={month} className="body-month-row">
				<div className="month">{month}</div>
				<div className="employees-birthdays">
				  {sortedMonth[month].map(el => {
					let parseDate = new Date(el.dob)
					let monthIndex = parseDate.getMonth() - 1;
					return <div key={el.id}
								className="info">{el.lastName} {el.firstName} - {parseDate.getDate()} {months[monthIndex]}, {parseDate.getFullYear()} year</div>
				  })}
				</div>
			  </div>
			}
		  })}


		</div>
	  </div>
  );
}