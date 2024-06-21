import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  reset,
  nextQuestion,
  prevQuestion,
  presentTheResult,
  hideTheResult,
} from "../src/REDUX/slice";
import "./app.scss";

function App() {
  const dispatch = useDispatch();
  const states = useSelector((state) => state);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////next Question
  const NextQuestionnn = () => {
    if (true) {
      dispatch(nextQuestion());
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////// previouse Question
  const prevQuestionnn = () => {
    if (states.changeQuestion.value <= 1) {
      alert("there is no any previous question!");
    } else {
      dispatch(prevQuestion());
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////check ansaweer
  const checkAnsawer = (your_ansawer, index) => {
    if (
      your_ansawer == states.questions[index].correct &&
      states.changeQuestion.value < states.questions.length
    ) {
      dispatch(increment());
      dispatch(nextQuestion());
    } else {
      if (your_ansawer == states.questions[index].correct) {
        dispatch(increment());
      } else {
        if (states.changeQuestion.value < states.questions.length) {
          dispatch(nextQuestion());
        }
      }
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////// present result
  if (states.changeQuestion.value == states.questions.length) {
    console.log("done");
    dispatch(presentTheResult());
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////restart
  const restart = () => {
    window.location.reload();
  };
  const layout = states.questions.map((question, index) => {
    if (question.questionNumber === states.changeQuestion.value) {
      return (
        <div className="quiz-container">
          <p className="question-title">{question.title}</p>
          <ul className="list-style">
            <li
              className="option"
              onClick={() => {
                checkAnsawer(question.options.a, index);
              }}
            >
              {question.options.a}
            </li>
            <li
              className="option"
              onClick={() => {
                checkAnsawer(question.options.b, index);
              }}
            >
              {question.options.b}
            </li>
            <li
              className="option"
              onClick={() => {
                checkAnsawer(question.options.c, index);
              }}
            >
              {question.options.c}
            </li>
            <li
              className="option"
              onClick={() => {
                checkAnsawer(question.options.d, index);
              }}
            >
              {question.options.d}
            </li>
          </ul>
        </div>
      );
    }
  });

  return (
    <div className="app-container">
      <div className="question-layout">{layout}</div>
      <div className="result">
        {states.showResult.showYourMark &&
          `Your marks are ${states.counter.value} /9`}
        <div className="navigation">
          <button className="nav-button" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
