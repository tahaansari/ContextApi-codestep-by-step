import "./App.css";
import Child from "./Child";
import { createContext, useState } from "react";
import OtherChild from "./OtherChild";
export const globalColor = createContext();

function App() {
  const [color, setColor] = useState("blue");
  const [day, setDay] = useState("Monday");
  const getDay = (para1) => {
    setDay(para1);
  };
  return (
    <globalColor.Provider value={{ color, getDay }}>
      <div className="App">
        <h1>This is Parent Component {day}</h1>
        <Child />
        <OtherChild />
      </div>
    </globalColor.Provider>
  );
}

export default App;
