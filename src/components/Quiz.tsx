import {type QuestionItem} from "../types/questionItem.ts";
import {type UserAnswerItem} from "../types/userAnswerItem.ts";

import {useState} from "react";
import styles from '../styles/quiz.module.css'

interface Props{
    questions: QuestionItem[]
    onAddAnswer: (newAnswer: UserAnswerItem) => void
    finishQuiz: () => void
    points: number
    increasePoints: () => void
}


function Quiz({questions, onAddAnswer, finishQuiz, points, increasePoints}: Props){

    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);

    const currentQuestion: QuestionItem = questions[questionIndex];
    const currentQuestionText: string = currentQuestion.questionText;
    const currentPossibleAnswers: string[] = currentQuestion.possibleAnswers;
    const correctAnswerIndex: number = currentQuestion.correctAnswerIndex;

    function handleAnswerClicked(answerText: string, answerIndex: number): void {
        setShowAnswers(true);
        const answerIsCorrect: boolean = (answerIndex === correctAnswerIndex)
        const newAnswer: UserAnswerItem = {
            question: currentQuestionText,
            answer: answerText,
            answerCorrect: answerIsCorrect
        }
        onAddAnswer(newAnswer);
        if (answerIsCorrect) increasePoints();
    }

    function nextQuestion() {
        setShowAnswers(false);
        if (questionIndex === questions.length - 1) finishQuiz();
        setQuestionIndex(i => i + 1);
    }

    return(
        <div className={styles.container}>
            <h1>Veebiviktoriin</h1>
            <h2>{currentQuestionText}</h2>
                {currentPossibleAnswers.map((answer, i) => (
                <p key={i} onClick={() => handleAnswerClicked (answer, i)}
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
            <p className="points">Sinu punktid: {points}</p>
            <button onClick={nextQuestion}
                    style={{display: (showAnswers)
                    ? "block"
                    : "none"}}
            >Järgmine küsimus</button>
        </div>
    );
}

export default Quiz;