import {type QuestionItem} from "../types/questionItem.ts";
import {type UserAnswerItem} from "../types/userAnswerItem.ts";

import {fetchQuestions} from "../api/questions.ts";
import {useEffect, useState} from "react";

import Quiz from "./Quiz.tsx";

function Controller() {
    const [questions, setQuestions] = useState<QuestionItem[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswerItem[]>([]);

    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data));
    }, []);

   const addUserAnswer = (newAnswer: UserAnswerItem) :void => {
       setUserAnswers([...userAnswers, newAnswer]);
    }

    if (questions.length < 1) return <p>loading</p>


    return(
      <div>
          <Quiz questions={questions} onAddAnswer={addUserAnswer}/>
      </div>
    );

}

export default Controller