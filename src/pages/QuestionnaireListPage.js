import useQuery from '../hooks/useQuery';

const QuestionnaireListPage = (QUESTIONNAIRE_LIST_QUERY) => {
  const { data, loading } = useQuery(QUESTIONNAIRE_LIST_QUERY);
  return (
    <div>
      <h1>Questionnaire List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.questionnaires.map(questionnaire => (
            <li key={questionnaire.id}>{questionnaire.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionnaireListPage;