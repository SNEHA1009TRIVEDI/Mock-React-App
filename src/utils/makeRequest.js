import axios from 'axios'; 
const makeRequest = async (method,url) => {
  const data = await axios({
    method: method,
    url: url,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer QWlzaHdhcnlhIE4"
        },

  });
  return data;
}
export default makeRequest;