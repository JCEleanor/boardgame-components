import React from "react";
import "./storeSelect.css";
import StoreSelect from "./StoreSelect";
import allStore from "../../images/allStore.svg";
import daanStore from "../../images/daanStore.svg";
import songShanStore from "../../images/songShanStore.svg";

const StoreSelectButtons = () => {
  return (
    <div className="store-select-wrapper">
      <StoreSelect text="全部" icon={allStore} />
      <StoreSelect text="大安店" icon={daanStore} />
      <StoreSelect text="松山店" icon={songShanStore} />
    </div>
  );
};

export default StoreSelectButtons;
