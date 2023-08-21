import { useState } from "react";
import "./App.css";

function App() {
  const arr = ["play Cricket", "Football", "Hockey"];
  const  [games,setGames] = useState(arr);
  const [check,setCheck] = useState(Array(games.length).fill(false));
  console.log(check);
  const handleDelete = (index) => {
    console.log(index,games[index])
    const updatedArr = games.filter((el,idx)=>idx !== index);
    console.log(updatedArr)
    setGames(updatedArr)
    setCheck(btn => btn.filter((_, idx) => idx !== index));
  }

  const handleChange = (id) => {
    const updated = [...check]
    check[id] = !check[id];
    setCheck(btn => [...btn,updated])

  }
  return (
    <div>
      {games.map((el, idx) => {
        return (
          <div className="flex items-center justify-center">
        
              <input type={"checkbox"} onChange={(e)=>{handleChange(idx)}}></input>
            <p className="m-4">{el}</p>
            {check[idx] && <button onClick={()=>{handleDelete(idx)}} className="border border-gray-500">Delete</button>}
          </div>
        );
      })}
    </div>
  );
}

export default App;
