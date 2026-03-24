import {type UserAnswerItem} from "../types/userAnswerItem.ts";
import styles from '../styles/results.module.css'

interface Props{
    userAnswers: UserAnswerItem[]
    points: number
}

function Results({userAnswers, points}: Props){

    let personalizedMsg: string = "Pead veel Eesti rahvussümboleid õppima.";
    if (points === (userAnswers.length))
        personalizedMsg = "Tead Eesti rahvussümboleid väga hästi, tubli!";
    else if (points > 0.5 * (userAnswers.length))
        personalizedMsg = "Tead mõnda Eesti rahvussümbolit, kuid mitte kõiki. Natuke pead veel õppima."

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
            <p className="points">Sinu punktid: {points}</p>
            <p className={styles.resultText}>{personalizedMsg}</p>
        </div>
    );
}

export default Results;