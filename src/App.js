import React, { useEffect, useState } from "react";
import './App.css';
import { TodoWrapper } from "./components/TodoWrapper";
import axios from "axios";
function App() {
const [data, setData] = useState("")
const [location, setLocation] = useState("")


// const url = "https://openweathermap.org/api"

const searchLocation = (e) => {
  if(e === 'Enter') {
    axios.get("https://openweathermap.org/api").then((res) => {
      setData(res.data)
      console.log(res)
    })
    setLocation("")
  }
}

  useEffect(() => {
    searchLocation()
  },[])

  return (
    <>

    <div className="App">
        <TodoWrapper/>
    </div>
    </>
  );
}

export default App;
