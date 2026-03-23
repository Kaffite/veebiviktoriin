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

    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data));
    }, []);

   const addUserAnswer = (newAnswer: UserAnswerItem) :void => {
       setUserAnswers([...userAnswers, newAnswer]);
    }

    const finishQuiz = () => {setQuizFinished(true)};

    if (questions.length < 1) return <p>loading</p>


    return(
      <div>
          {quizFinished
              ? <Results userAnswers={userAnswers}/>
              : <Quiz questions={questions} onAddAnswer={addUserAnswer} finishQuiz={finishQuiz}/>
          }
      </div>
    );

}

export default Controller