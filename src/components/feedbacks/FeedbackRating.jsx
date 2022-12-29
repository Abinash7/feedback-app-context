import Radio from "../common/Radio";

const FeedbackRating = ({ getRating, rating }) => {
  return (
    <>
      <Radio
        label={1}
        getRating={getRating}
        id={"numOne"}
        checkedValue={rating}
      />
      <Radio
        label={2}
        getRating={getRating}
        id={"numTwo"}
        checkedValue={rating}
      />
      <Radio
        label={3}
        getRating={getRating}
        id={"numThree"}
        checkedValue={rating}
      />
      <Radio
        label={4}
        getRating={getRating}
        id={"numFour"}
        checkedValue={rating}
      />
      <Radio
        label={5}
        getRating={getRating}
        id={"numFive"}
        checkedValue={rating}
      />
    </>
  );
};

export default FeedbackRating;
