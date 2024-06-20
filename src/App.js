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

  const checkAnsawer = (your_ansawer, index) => {
    if (your_ansawer == states.questions[index].correct) {
      console.log(your_ansawer);
      dispatch(increment());
    }
  };
  const layout = states.questions.map((question, index) => {
    if (question.questionNumber === states.changeQuestion.value) {
      return (
        <div className=" quiz-container">
          <button onClick={prevQuestionnn}>Previous</button>
          <button onClick={NextQuestionnn}>Next</button>

          <p className="question_titile">{question.title}</p>
          <ul className=" listStyle">
            <li
              onClick={() => {
                checkAnsawer(question.options.a, index);
              }}
            >
              {question.options.a}
            </li>
            <li
              onClick={() => {
                checkAnsawer(question.options.b, index);
              }}
            >
              {question.options.b}
            </li>
            <li
              onClick={() => {
                checkAnsawer(question.options.c, index);
              }}
            >
              {question.options.c}
            </li>
            <li
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
  console.log(states.counter.value);

  return <div>{layout}</div>;
}

export default App;
