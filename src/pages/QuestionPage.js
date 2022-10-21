import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import questionnaires from "../data/Questionnaires-Content";
import NotFoundPage from "./NotFoundPage";

const QuestionPage = () => {
  const [answer, setAnswer] = useState({index: 0, answers: []});

  useEffect(() => {
    setAnswer({index: 10, answers: []});
  }, []);
  
  const { questionnaireId } = useParams();
  const questionnaire = questionnaires.find(question => question.name === questionnaireId);
  
  if(!questionnaire) {
    return <NotFoundPage />
  }

  return (
    <div>
      <h1>{questionnaire.title}</h1>
      <p>This index is {answer.index} !!. </p>
      <p>This answer is {answer.answers[0]} !!. </p>
      {questionnaire.content.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          
        </div>
      ))}
    </div>
  );
};

export default QuestionPage;