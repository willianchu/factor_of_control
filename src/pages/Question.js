const Question = ({ question }) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <p>{question.content}</p>
    </div>
  );
};
