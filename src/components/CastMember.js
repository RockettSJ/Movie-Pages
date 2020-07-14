import React from "react";

const CastMember = (props) => {
  return (
    <div className="cast-member-container">
      <img className="img" src={props.photo} alt="Portrait" />
      <h5>{props.name}</h5>
    </div>
  );
};

export default CastMember;
