import React from "react";

const StoreSelect = (props) => {
  const { text, icon } = props;
  return (
    <button className="store-select-button">
      <img src={icon} alt="store" />
      {text}
    </button>
  );
};

export default StoreSelect;
