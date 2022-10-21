import { useState } from "react";
import axios from "axios";

const AddAnswersForm = ({ questionnaireId, onUpdateAnswer }) => {
  const [ name, setName ] = useState("");
  const [ answerText, setAnswerText ] = useState("");

  const addAnswer = async () => {
    const response = await axios.post(`/api/questionnaires/${questionnaireId}/answers`, {
      takeBy: name,
      candidateAnswers: answerText,
    });
    const newInfo = response.data;
    onUpdateAnswer(newInfo);
    setName("");
    setAnswerText("");
  }
  return (
    <div id="add-answer-form">
      <h3>Add Answers</h3>
      <label>
        Name:
        <input 
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text" />
      </label>
      <label>
        Answers:
        <textarea 
          value={answerText}
          onChange={(event) => setAnswerText(event.target.value)}
          rows="4" cols="40" />
      </label>
      <button onClick={addAnswer}>Add</button>
    </div>
  );
}

export default AddAnswersForm;