import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  reset,
  nextQuestion,
  prevQuestion,
} from "../src/REDUX/slice";
import "./app.scss";
function App() {
  const dispatch = useDispatch();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////get list of questions
  const states = useSelector((state) => {
    return state;
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////next Question
  const NextQuestionnn = () => {
    if (states.questions.length === states.changeQuestion.value) {
      alert("there is no any next question!");
    } else {
      dispatch(nextQuestion());
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////previous Question
  const prevQuestionnn = () => {
    if (states.changeQuestion.value <= 1) {
      alert("there is no any previous question!");
    } else {
      dispatch(prevQuestion());
    }
  };
  console.log(states);
  console.log(states.changeQuestion.value);
  const layout = states.questions.map((question) => {
    if (question.questionNumber === states.changeQuestion.value) {
      return (
        <div className=" quiz-container">
          <button onClick={prevQuestionnn}>Previous</button>
          <button onClick={NextQuestionnn}>Next</button>

          <p className="question_titile">{question.title}</p>
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
