import {type UserAnswerItem} from "../types/userAnswerItem.ts";
import styles from '../styles/results.module.css'

function Results({userAnswers}: {userAnswers: UserAnswerItem[]}){

    return(
        <div className="container">
            <h1>Teie tulemused</h1>
            <table>
                <tr>
                    <th>Küsimus</th>
                    <th>Vastus</th>
                    <th>Tulemus</th>
                </tr>
                    {userAnswers.map(item => (
                        <tr>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
                            {item.answerCorrect
                                ?<td className={styles.correctAnswer}>Õige</td>
                                :<td className={styles.incorrectAnswer}>Vale</td>
                            }
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default Results;