import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  reset,
  nextQuestion,
  prevQuestion,
} from "../src/REDUX/slice";

function App() {
  const dispatch = useDispatch();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////get list of questions
  const states = useSelector((state) => {
    return state;
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////next Question
  const NextQuestionnn = () => {
    dispatch(nextQuestion());
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////previous Question
  const prevQuestionnn = () => {
    dispatch(prevQuestion());
  };

  console.log();

  const layout = states.questions.map((question) => {
    if (question.questionNumber === states.changeQuestion.value) {
      return (
        <div>
          <button onClick={prevQuestionnn}>Previous</button>
          <button onClick={NextQuestionnn}>Next</button>

          <p>{question.title}</p>
          <ul>
            <li>{question.options.a}</li>
            <li>{question.options.b}</li>
            <li>{question.options.c}</li>
            <li>{question.options.d}</li>
          </ul>
        </div>
      );
    }
  });

  return <div>{layout}</div>;
}

export default App;
