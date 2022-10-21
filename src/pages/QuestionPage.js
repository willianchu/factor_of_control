import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import AnswersList from "../components/AnswersList";
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
  
  if(!questionnaire) {
    return <NotFoundPage />
  }
  console.log(answer);
  return (
    <>
      <h1>{questionnaire.title}</h1>
      <p>This index is {answer.index} !!. </p>
        {questionnaire.content.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
        </div>
      ))}
      <AnswersList answers={answer.answers} />
    </>
  );
};

export default QuestionPage;