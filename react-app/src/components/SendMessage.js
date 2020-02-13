import React from "react";
import { MdMessage } from "react-icons/md";

const SendMessage = ({ handler }) => {
  return (
    <div
      className="SendMessage border border-warning rounded-circle bg-warning"
      onClick={handler}
    >
      <MdMessage size='1.5em' color="#fff" />
    </div>
  );
};

export default SendMessage;
