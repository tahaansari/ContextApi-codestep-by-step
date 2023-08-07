import { useContext } from "react";
import { globalColor } from "./App";
const SuperChild = () => {
  const { color, getDay } = useContext(globalColor);
  return (
    <div>
      <h1 style={{ color: color }}>This is super child component</h1>
      <button onClick={() => getDay("Tuesday")}>Click me</button>
    </div>
  );
};

export default SuperChild;
