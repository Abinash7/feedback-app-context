import { useContext } from "react";
import { FeedbackContext } from "../../contexts/feedbackContext";

const FeedbackStats = () => {
  const { feedbackCount, avgFeedbackRating } = useContext(FeedbackContext);
  return (
    <div>
      <h3>Total Feedback : {feedbackCount}</h3>
      <h3>Average Rating : {avgFeedbackRating}</h3>
    </div>
  );
};

export default FeedbackStats;
