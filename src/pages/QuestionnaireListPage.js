import { Link } from 'react-router-dom';
import questionnaires from '../data/Questionnaires-Content';

const QuestionnaireListPage = () => {
  
  return (
    <>
      <h1>Questionnaire List</h1>
      {questionnaires.map(questionnaire => (
        <Link key={questionnaire.name} className="questionnaire-list-item" to={`/questionnaires/${questionnaire.name}`}>
          <h3>{questionnaire.title}</h3>
          <p></p>
        </Link>
      ))}   
    </>
  );
};

export default QuestionnaireListPage;