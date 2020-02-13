import React from "react";

const PostItem = ({ id, message, date, author, img }) => {
  const urlToImage = "http://localhost:8000/uploads/";
  return (
    <div className="col-8 offset-2 border-warning border bg-light p-2 mb-1">
      <div className=" border-bottom border-warning">
        <strong>{author} </strong>
        <span>{new Date(date).toLocaleString()}</span>
      </div>
      <span> >>> {id}</span>
      <p className="my-1">{message}</p>
      {img && (
        <img
          src={urlToImage + img}
          alt=""
          style={{ width: 100, height: 100 }}
        />
      )}
    </div>
  );
};

export default PostItem;
