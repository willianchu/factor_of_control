import { useParams } from "react-router-dom";
import questionnaires from "../data/Questionnaires-Content";

const QuestionPage = () => {
  const { questionnaireId } = useParams();
  const questionnaire = questionnaires.find(question => question.name === questionnaireId);
  return (
    <div>
      <h1>{questionnaire.title}</h1>
      {questionnaire.content.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          
        </div>
      ))}
    </div>
  );
};

export default QuestionPage;