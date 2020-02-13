import React from "react";
import PostItem from "./PostItem";

const PostList = ({ messages }) => {
  return (
    <div className="row">
      {messages.map(elem => (
        <PostItem
          message={elem.message}
          date={elem.date}
          author={elem.author}
          img={elem.filename}
          id={elem.id}
          key={elem.id}
        />
      ))}
    </div>
  );
};

export default PostList;
