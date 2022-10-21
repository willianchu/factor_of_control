import { useState } from "react";
import axios from "axios";
import userUser from "../hooks/useUser";

const AddAnswersForm = ({ questionnaireId, onUpdateAnswer }) => {
  const [ name, setName ] = useState("");
  const [ answerText, setAnswerText ] = useState("");
  const { user } = useUser();

  const addAnswer = async () => {
    const token = user && await user.getIdToken();  
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(`/api/questionnaires/${questionnaireId}/answers`, {
      takeBy: name,
      candidateAnswers: answerText,
    }, { headers });
    const newInfo = response.data;
    onUpdateAnswer(newInfo);
    setName("");
    setAnswerText("");
  }
  return (
    <div id="add-answer-form">
      <h3>Add Answers</h3>
      {user && <p>You're answering as {user.email}</p>}
        <textarea 
          value={answerText}
          onChange={(event) => setAnswerText(event.target.value)}
          rows="4" cols="40" />
        <button onClick={addAnswer}>Add</button>
    </div>
  );
}

export default AddAnswersForm;