import {type QuestionItem} from '../types/questionItem.ts'

async function fetchQuestions(): Promise<QuestionItem[]> {
    const response = await fetch('/data/questions.json');

    if (!response.ok) {
        throw new Error("Fetching questions failed!");
    }

    return await response.json();
}

export {fetchQuestions};