import {type QuestionItem} from "../types/questionItem.ts";
import Quiz from "./Quiz.tsx";
import {fetchQuestions} from "../api/questions.ts";
import {useEffect, useState} from "react";

function Controller() {
    const [questions, setQuestions] = useState<QuestionItem[]>([])

    useEffect(() => {
        fetchQuestions().then(data => setQuestions(data));
    }, []);

    if (questions.length < 1) return <p>loading</p>

    return(
      <div>
        <Quiz QuestionItemList={questions}/>
      </div>
    );

}

export default Controller