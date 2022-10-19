import { Link } from 'react-router-dom';

const QuestionnairesList = ({questionnaires}) => {
  console.log(questionnaires.data);
  return (
    <>
      {questionnaires.map(questionnaire => (
        <Link key={questionnaire.name} className="questionnaire-list-item" to={`/questionnaires/${questionnaire.name}`}>
          <h3>{questionnaire.title}</h3>
          <p></p>
        </Link>
      ))}   
    </>
  );
}
export default QuestionnairesList;