import React from "react";

const CastMember = (props) => {
  return (
    <div className="cast-card card">
      {props.photo == null ? (
        "No Photo"
      ) : (
        <img className="card-img-top" src={props.photo} alt="Cast Portrait" />
      )}

      <div className="card-body text-center">
        <div className="card-title font-weight-bold">
          <div className="font-weight-bold">{props.name}</div>
        </div>
        <p>
          <em>{props.char}</em>
        </p>
      </div>
    </div>
  );
};

export default CastMember;
