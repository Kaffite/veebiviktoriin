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
           questionText: "Kes on Eesti rahvuslind?",
           possibleAnswers: ["Rasvatihane", "Leevike", "Suitsupääsuke", "Kuldnokk"],
           correctAnswerIndex: 2
         }
      ];

  return (
      <>
          <div className="header"></div>
          <Quiz QuestionItemList={QuestionItems}/>
      </>
  );
}

export default App
