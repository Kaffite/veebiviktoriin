import {type QuestionItem} from "../types/questionItem.ts";
import {useState} from "react";
import styles from './quiz.module.css'

interface QuestionItems{
    QuestionItemList: QuestionItem[]
}


function Quiz({QuestionItemList}: QuestionItems){

    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);

    const currentQuestion: QuestionItem = QuestionItemList[questionIndex];
    const currentQuestionText: string = currentQuestion.questionText;
    const currentPossibleAnswers: string[] = currentQuestion.possibleAnswers;
    const correctAnswerIndex: number = currentQuestion.correctAnswerIndex;



    function handleAnswerClicked(): void {
        // TODO: Transitioning to result component

        // When to move on to the next question
        const showAnswersDuration: number = 2500;
        setShowAnswers(true);

        setTimeout(() => {
            if (questionIndex + 1 < QuestionItemList.length){
                setQuestionIndex(i=> i + 1);
                setShowAnswers(false);
            }
        }, showAnswersDuration)

    }

    // TODO : Classname to possibleAnswers
    return(
        <div className={styles.container}>
            <h1>Veebiviktoriin</h1>
            <h2>{currentQuestionText}</h2>
                {currentPossibleAnswers.map((answer, i) => (
                <p key={i} onClick={handleAnswerClicked}
                  className={
                      showAnswers
                      ? (i === correctAnswerIndex)
                          ? styles.correctAnswer
                          : styles.wrongAnswer
                      : styles.answer
                  }
                >
                {answer}
                </p>
                ))}
        </div>
    );
}

export default Quiz;