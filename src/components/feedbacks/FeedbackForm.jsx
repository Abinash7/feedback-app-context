import { useContext, useState } from "react";
import { FeedbackContext } from "../../contexts/feedbackContext";
import FeedbackRating from "./FeedbackRating";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const { createFeedbackData } = useContext(FeedbackContext);

  function handleInputText(e) {
    if (text === "") {
      setError("Space is not a valid feedback. Use specific messages.");
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length < 10) {
      setError("Provide input more than 10 characters.");
      setIsDisabled(true);
    } else {
      setError("");
      setIsDisabled(false);
    }
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputValues = { text, rating, id: crypto.randomUUID() };
    createFeedbackData(inputValues);
    setText("");
    setRating("");
    setIsDisabled(true);
  }

  function getRating(ratingValue) {
    setRating(ratingValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter your feedback here..."
          onChange={handleInputText}
          value={text}
        />
        {error && <h4>{error}</h4>}
      </div>
      <div>
        <FeedbackRating getRating={getRating} rating={rating} />
      </div>
      <div>
        <button type="submit" disabled={isDisabled}>
          Add Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
