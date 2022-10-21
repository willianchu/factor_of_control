import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import AnswersList from "../components/AnswersList";
import AddAnswersForm from "../components/AddAnswersForm";
import questionnaires from "../data/Questionnaires-Content";

const QuestionPage = () => {
  const { questionnaireId } = useParams();
  const [answer, setAnswer] = useState({index: 0, answers: []});

  useEffect(() => {
    const loadQuestionnaire = async () => {
    const response = await axios.get(`/api/questionnaires/${questionnaireId}`);
    const newInfo = response.data;
    console.log("newInfo",newInfo);
    setAnswer(newInfo);
    }
    // call async function inside useEffect manoeuver
    loadQuestionnaire();
    console.log("useEffect");
  }, []);
  
  const questionnaire = questionnaires.find(question => question.name === questionnaireId);

  const addIndex = async () => {
    const response = await axios.put(`/api/questionnaires/${questionnaireId}/index`);
    const newInfo = response.data;
    setAnswer(newInfo);
  }
  
  if(!questionnaire) {
    return <NotFoundPage />
  }
  console.log(answer);
  return (
    <>
      <h1>{questionnaire.title}</h1>
      <div>
      <button onClick={addIndex}>Next</button>
      <p>This index is {answer.index} !!. </p>
      </div>
        {questionnaire.content.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
        </div>
      ))}
      <AddAnswersForm 
        questionnaireId={questionnaireId} 
        onUpdateAnswer={updatedAnswer => setAnswer(updatedAnswer)} />
      <AnswersList answers={answer.answers} />
    </>
  );
};

export default QuestionPage;