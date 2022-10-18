import useQuery from '../hooks/useQuery';
import Question from '../components/Question';
import { useParams } from 'react-router-dom';

const QuestionPage = (GET_QUESTION) => {
  const { questionId } = useParams();
  const { data, loading, error } = useQuery(GET_QUESTION, {
    variables: { questionId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <Question question={data.question} />
    </div>
  );
};

export default QuestionPage;