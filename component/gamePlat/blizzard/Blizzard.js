import React from "react";
import "./Blizzard.css";
const Blizzard = () => {
  return (
    <div className="currentPage">
      <div className="contentPage">
        <img
          className="Icon-Blizzard"
          alt="Icon of Blizzard"
          src="https://external-preview.redd.it/wFOBEiVQtek76NU2o8drpwweHr5H9cS8Osch9vC-yF8.png?auto=webp&s=eb0d28c5dce94d7ec322fa2a5cc34726423fe4dd"
        />
        <img
          className="Icon-ow2"
          alt="Icon of OW2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png "
        />

        <div className="content">This is the content</div>
      </div>
    </div>
  );
};

export default Blizzard;
