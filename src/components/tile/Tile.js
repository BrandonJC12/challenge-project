import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {
        Object.values(this.props.contacts).map(
          (value, idx) => (
           <p key={idx} className={`${idx === 0 ? "title-title" : ""} tile`} > {value}</p> 
          )
        )
      }
    </div>
  );
};