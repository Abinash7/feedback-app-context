import axios from "axios";

export const getFeedback = async () =>
  await axios.get("http://localhost:3000/feedbacks");

export const deleteFeedbackData = (feedbackId) =>
  axios.delete(`http://localhost:3000/feedbacks/${feedbackId}`);

export const createFeedback = (newFeedbackData) =>
  axios.post("http://localhost:3000/feedbacks", newFeedbackData);
