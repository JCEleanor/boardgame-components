import React from "react";

const StoreSelect = (props) => {
  //value: all, daan, songshan
  const { text, icon, setStore, store, value } = props;

  let isSelected = false;

  if (value === store) {
    isSelected = true;
  }

  return (
    <button
      className={`store-select-button ${isSelected && "selected"}`}
      onClick={() => {
        setStore(value);
      }}
    >
      <img src={icon} alt="store" />
      {text}
    </button>
  );
};

export default StoreSelect;
