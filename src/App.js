import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../src/REDUX/slice";
function App() {
  const states = useSelector((state) => {
    return state;
  });
  console.log(states);
  return <div>hello world!</div>;
}

export default App;
