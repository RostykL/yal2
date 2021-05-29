import './home.css';
import Employees from "../../components/Employees/Employees";
import EmployeesBirthday from "../../components/EmployeesBirthday/EmployeesBirthday";

export default function Home() {
  return (
	  <div className="home">
		<Employees/>
		<EmployeesBirthday/>
	  </div>
  );
}