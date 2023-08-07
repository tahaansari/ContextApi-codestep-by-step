import "./App.css";
import Child from "./Child";
import { createContext, useState } from "react";
export const globalColor = createContext();

function App() {
  const [color, setColor] = useState("blue");
  const [day, setDay] = useState("Monday");
  const getDay = (para1) => {
    alert(para1);
  };
  return (
    <globalColor.Provider value={{ color, getDay }}>
      <div className="App">
        <h1>This is Parent Component {day}</h1>
        <Child />
      </div>
    </globalColor.Provider>
  );
}

export default App;
