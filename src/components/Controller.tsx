import {type QuestionItem} from "../types/questionItem.ts";
import {type UserAnswerItem} from "../types/userAnswerItem.ts";

import {fetchQuestions} from "../api/questions.ts";
import {useEffect, useState} from "react";

import Quiz from "./Quiz.tsx";
import Results from "./Results.tsx";

function Controller() {
    const [questions, setQuestions] = useState<QuestionItem[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswerItem[]>([]);
    const [quizFinished, setQuizFinished] = useState<boolean>(false);
    const [points, setPoints] = useState<number>(0);

    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data));
    }, []);

   const addUserAnswer = (newAnswer: UserAnswerItem) :void => {
       setUserAnswers([...userAnswers, newAnswer]);
    }
    const finishQuiz = () => {setQuizFinished(true)};
   const addPoint = () => setPoints(p => p + 1);

    if (questions.length < 1) return <p>loading</p>

    return(
      <div>
          {quizFinished
              ? <Results userAnswers={userAnswers} points={points}/>
              : <Quiz questions={questions} onAddAnswer={addUserAnswer}
                      finishQuiz={finishQuiz} points={points} increasePoints={addPoint}/>
          }
      </div>
    );

}

export default Controller