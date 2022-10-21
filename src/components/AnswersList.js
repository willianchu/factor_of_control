const AnswersList = ({ answers}) => {
  console.log(answers);
  return (
  <>
    <h3>Answers:</h3>
    {answers.map(answer => (
      <div className="answer" key={answer.takeBy + ": " + answer.candidateAnswers}>
        <h4>{answer.takeBy} </h4>
        <p>{answer.candidateAnswers}</p>
      </div>
    ))}
  </>
  )
};


export default AnswersList;