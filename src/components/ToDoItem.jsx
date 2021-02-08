import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.isClicked(props.id);
        }}
      >
        {" "}
        {props.itemArray}{" "}
      </li>
    </div>
  );
}
export default ToDoItem;
