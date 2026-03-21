import {type QuestionItem} from './types/questionItem'
import Quiz from './quiz/Quiz.tsx'

function App() {
  // TODO: Read questions from file
  const QuestionItems: QuestionItem[] =
      [
         {
         questionText: "Mis on Eesti pealinn?",
         possibleAnswers: ["Tallinn", "Tartu", "Pärnu", "Narva"],
         correctAnswerIndex: 0
         },
         {
           questionText: "Mis on Eesti rahvuslind?",
           possibleAnswers: ["Rasvatihane", "Leevike", "Suitsupääsuke", "Kuldnokk"],
           correctAnswerIndex: 2
         }
      ];

  return (
      <>
        <Quiz QuestionItemList={QuestionItems}/>
      </>
  );
}

export default App
