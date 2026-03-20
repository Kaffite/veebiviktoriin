import {type QuestionItem} from "../types/questionItem.ts";
import {useState} from "react";

interface QuestionItems{
    QuestionItemList: QuestionItem[]
}


function Quiz({QuestionItemList}: QuestionItems){

    const [questionIndex, setQuestionIndex] = useState<number>(0);

    const currentQuestion: QuestionItem = QuestionItemList[questionIndex];
    const currentQuestionText: string = currentQuestion.questionText;
    const currentPossibleAnswers: string[] = currentQuestion.possibleAnswers;
    const correctAnswerIndex: number = currentQuestion.correctAnswerIndex;


    function handleAnswerClicked(): void {
        //TODO: Transitioning to result component
        if (questionIndex + 1 < QuestionItemList.length){
            setQuestionIndex(i=> i + 1);
        }
    }

    return(
        <div>
            <h1>Veebiviktoriin</h1>
            <h2>{currentQuestionText}</h2>
                {currentPossibleAnswers.map(
                (answer: string, index: number) => (
                <p key={index} onClick={handleAnswerClicked}>{answer}</p>
                ))}
        </div>
    );
}

export default Quiz;