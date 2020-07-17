import React from "react";
import "./CastMember.css";

const CastMember = (props) => {
  return (
    <div className="cast-card card bg-dark text-light">
      {props.photo == null ? (
        "No Photo"
      ) : (
        <img className="card-img-top" src={props.photo} alt="Cast Portrait" />
      )}

      <div className="card-body">
        <div className="card-title font-weight-bold">
          <h5>{props.name}</h5>
        </div>
        <p>Text</p>
      </div>
    </div>
  );
};

export default CastMember;
