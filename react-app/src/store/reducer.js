import { GET_POSTS } from "./action";

const initialState = {
  messages: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
