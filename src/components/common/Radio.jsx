import React from "react";

const Radio = ({ label, id, getRating, checkedValue }) => {
  function handleRatingChange(e) {
    getRating(+e.target.value);
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        name="rating"
        value={label}
        id={id}
        onChange={handleRatingChange}
        checked={checkedValue === label}
      />
    </div>
  );
};

export default Radio;
