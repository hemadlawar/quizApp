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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////get list of questions
  const states = useSelector((state) => {
    return state;
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////next Question
  const NextQuestionnn = () => {
    if (true) {
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
    if (
      your_ansawer == states.questions[index].correct &&
      states.changeQuestion.value < states.questions.length
    ) {
      dispatch(increment());
      dispatch(nextQuestion());
    } else {
      if (your_ansawer == states.questions[index].correct) {
        // dispatch(increment());
      } else {
        if (states.changeQuestion.value < states.questions.length) {
          dispatch(nextQuestion());
        }
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  if (states.changeQuestion.value == states.questions.length) {
    console.log("done");
    dispatch(presentTheResult());
  }

  const layout = states.questions.map((question, index) => {
    if (question.questionNumber === states.changeQuestion.value) {
      return (
        <div className=" quiz-container">
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

  return (
    <div>
      <div> {layout}</div>
      <div>
        {states.showResult.showYourMark &&
          `your marks is ${states.counter.value + 1} /9`}
      </div>
    </div>
  );
}

export default App;
