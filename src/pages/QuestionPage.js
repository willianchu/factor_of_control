import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import AnswersList from "../components/AnswersList";
import AddAnswersForm from "../components/AddAnswersForm";
import useUser from "../hooks/useUser";
import questionnaires from "../data/Questionnaires-Content";

const QuestionPage = () => {
  const { questionnaireId } = useParams();
  const [answer, setAnswer] = useState({index: 0, answers: [], canIndex: false});
  const { canIndex } = answer;
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadQuestionnaire = async () => {
    const token = user && await user.getIdToken();  
    const headers = token ? { authtoken: token } : {};
    const response = await axios.get(`/api/questionnaires/${questionnaireId}`, {
      headers});
    const newInfo = response.data;
    console.log("newInfo",newInfo);
    setAnswer(newInfo);
    }
    // call async function inside useEffect manoeuver
    if (isLoading) {
      loadQuestionnaire();
    }
    console.log("useEffect");
  }, [isLoading, user]);
  
  const questionnaire = questionnaires.find(question => question.name === questionnaireId);

  const addIndex = async () => {
    const token = user && await user.getIdToken();  
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/questionnaires/${questionnaireId}/index`,null,{headers});
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
      <div className="add-section">
        {user
          ? <button onClick={addIndex}>{canIndex? 'Add' : 'Just Once'}</button>
          : <button>Log in to add index</button>
        }
      <p>This index is {answer.index} !!. </p>
      </div>
        {questionnaire.content.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
        </div>
      ))}
      {user
        ? <AddAnswersForm 
            questionnaireId={questionnaireId} 
            onUpdateAnswer={updatedAnswer => setAnswer(updatedAnswer)} />
        : <button>Log in to add answers</button>
      }
      <AnswersList answers={answer.answers} />
    </>
  );
};

export default QuestionPage;