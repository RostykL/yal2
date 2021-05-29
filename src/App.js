import './App.css';

import Home from './pages/Home/Home'
import {useEffect} from "react";
import FetchEmployees from "./redux/actions/fetchEmployees";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
	dispatch(FetchEmployees())
  }, [])

  return <div className={"App"}>
	<Home/>
  </div>
}

export default App;
