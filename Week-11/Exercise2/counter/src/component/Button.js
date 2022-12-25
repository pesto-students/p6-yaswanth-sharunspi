import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-${props.variant}`}>
      {props.children}
    </button>
  );
}
