export const GET_POSTS = "GET_POSTS";

export const getPost = posts => ({ type: GET_POSTS, payload: posts });

export const requestGetPost = () => async dispatch => {
  try {
    const response = await fetch("/messages");
    const { data } = await response.json();
    dispatch(getPost(data));
  } catch (e) {
    console.log("Error in fetch : ", e.message);
  }
};

export const requestSendPost = post => async dispatch => {
  try {
    await fetch("/messages", {
      method: "POST",
      body: post
    });
  } catch (e) {
    console.log("Error on send message : ", e.message);
  }
};
