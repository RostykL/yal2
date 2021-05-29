import {months} from "./months";

export const sortByMonth = (employees) => {
  let employeesMonth = new Map();
  for(let i = 0; i < months.length; i++) {
	employeesMonth[months[i]] = [];
	for(let j = 0; j < employees.length; j++) {
	  let parseDate = new Date(employees[j].dob)
	  let monthIndex = parseDate.getMonth() - 1;
	  if(monthIndex === i) {
		employeesMonth[months[i]].push(employees[j])
	  }
	}
  }
  return employeesMonth
}