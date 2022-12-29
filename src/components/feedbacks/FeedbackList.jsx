import React, { useContext } from "react";
import { FeedbackContext } from "../../contexts/feedbackContext";
import Feedback from "./Feedback";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <>
      {feedback && feedback.length ? (
        feedback.map((item, index) => {
          return <Feedback key={item.id} index={index} item={item} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default FeedbackList;
