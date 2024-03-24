import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data,setData] = useState([])
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return ( <div>
    <div className="shop-container"></div>
  </div>)
}

export default App;
