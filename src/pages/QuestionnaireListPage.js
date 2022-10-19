import QuestionnairesList from '../components/QuestionnairesList';
import data from '../data/Questionnaires-Content';

const QuestionnaireListPage = () => {
  console.log("outside",data);
  return (
    <>
      <h1>Questionnaire List</h1>
      <QuestionnairesList questionnaires={data} />
    </>
  );
};

export default QuestionnaireListPage;