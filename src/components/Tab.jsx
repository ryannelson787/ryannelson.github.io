import React from "react";

import '../css/Tab.css';

function Tab( {name, goToTab, setPageName} ) {
  return (
    <div className={"tab-container"}
      onClick={() => {
        goToTab(name);
      }}>
      <b>{name}</b>
    </div>
  )
}

export default Tab;