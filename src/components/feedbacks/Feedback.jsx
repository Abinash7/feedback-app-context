import React, { useContext } from "react";
import { FeedbackContext } from "../../contexts/feedbackContext";

const Feedback = ({ item, index }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  function handleDeleteClick() {
    deleteFeedback(item.id);
  }

  return (
    <div>
      <p>{index + 1}</p>
      <h4>{item.text}</h4>
      <h5>Rating : {item.rating}</h5>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Feedback;
