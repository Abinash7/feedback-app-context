import { createContext, useEffect, useState } from "react";
import createFeedback from "../../../Takeo/feedback-app/src/service/createFeedback";
import { deleteFeedbackData, getFeedback } from "../services/feedback";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  //Get Feedback Data
  useEffect(() => {
    getFeedback()
      .then(({ data }) => {
        setFeedback(data);
      })
      .catch((error) => setFeedback([]));
  }, []);

  //Delete Feedback Data
  function deleteFeedback(feedbackId) {
    window.confirm("Are you sure to delete?") &&
      setFeedback(
        feedback.filter((actualItem) => actualItem.id !== feedbackId)
      );
    deleteFeedbackData(feedbackId);
  }

  //Create Feedback
  function createFeedbackData(newFeedbackData) {
    setFeedback([...feedback, newFeedbackData]);
    createFeedback(newFeedbackData);
  }

  // count total feedback and get average rating
  const feedbackCount = feedback.length;
  const avgFeedbackRating = (
    feedback.reduce(
      (accumulator, currentValue) => accumulator + currentValue.rating,
      0
    ) / feedbackCount
  ).toFixed(2);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        createFeedbackData,
        feedbackCount,
        avgFeedbackRating,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
