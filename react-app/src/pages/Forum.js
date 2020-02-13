import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { requestGetPost } from "../store/action";
import SendMessage from "../components/SendMessage";
import Form from "../components/Form";

const Forum = () => {
  const messages = useSelector(state => state.messages);
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetPost());
  }, [dispatch]);

  return (
    <div>
      <h2>Forum page</h2>
      <div className="container">
        <PostList messages={messages} />
        {form ? (
          <Form closeHandler={() => setForm(!form)} />
        ) : (
          <SendMessage handler={() => setForm(!form)} />
        )}
      </div>
    </div>
  );
};

export default Forum;
