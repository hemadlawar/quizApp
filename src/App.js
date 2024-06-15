import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../src/REDUX/slice";
function App() {
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return state;
  });

  const layout = states.questions.map((question) => {
    return (
      <div>
        <p>{question.title}</p>
        <ul>
          <li>{question.options.a}</li>
          <li>{question.options.b}</li>
          <li>{question.options.c}</li>
          <li>{question.options.d}</li>
        </ul>
      </div>
    );
  });

  return <div>{layout}</div>;
}

export default App;
