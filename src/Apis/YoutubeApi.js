import axios from "axios";

const KEY = "AIzaSyDHEnZd9-xEYTnbN6RBFfgzgkDFbkuuu_w";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", key: KEY, maxResults: 5 }
});
