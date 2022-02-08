import { getData } from "../../__lib__/helpers/HttpService";
import { messageSlice } from "./slice";
const { actions: slice } = messageSlice;

export const setMessages = () => (dispatch) => {
  getData('/contacts')
    .then(response => dispatch(slice.setMessages(response)))
}
