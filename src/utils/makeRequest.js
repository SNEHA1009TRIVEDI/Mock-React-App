import axios from "axios";
const makeRequest = async (method, url, count, isLiked) => {
  const data = await axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer QWlzaHdhcnlhIE4=",
    },
    data:{
      like: isLiked,
    }
  });
  return data;
};
export default makeRequest;
