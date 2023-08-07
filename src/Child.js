import SuperChild from "./SuperChild";
const Child = () => {
  return (
    <div>
      <h1>This is child component</h1>
      <SuperChild />
    </div>
  );
};

export default Child;
