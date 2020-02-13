import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import {requestGetPost, requestSendPost} from "../store/action";

const Form = ({ closeHandler }) => {
  const [data, setData] = useState({
    author: "",
    message: "",
    image: null
  });
  const dispatch = useDispatch();

  const inputHandler = e => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const inputFileHandler = e => {
    const { id, files } = e.target;
    setData({ ...data, [id]: files[0] });
  };

  const formHandler =async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach(elem => formData.append(elem, data[elem]));
    await dispatch(requestSendPost(formData));
    await dispatch(requestGetPost());
    closeHandler();
  };

  return (
    <div className="Form row bg-light">
      <div className="col-12">
        <form onSubmit={formHandler}>
          <div className="bg-secondary d-flex align-items-center justify-content-center">
            <p className="my-1 flex-grow-1 text-center text-white">
              Ответить в тред
            </p>
            <button
              type="button"
              className="bg-transparent btn"
              onClick={closeHandler}
            >
              <MdClose size="1.2em" color="#fff" />
            </button>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="author">Nickname (optional)</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={data.author}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={data.message}
              onChange={inputHandler}
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Download image</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              onChange={inputFileHandler}
            />
          </div>
          <button type="submit" className="btn btn-block btn-outline-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
