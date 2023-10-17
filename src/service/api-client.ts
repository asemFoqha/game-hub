import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d0627a4966045cda92c5291d5cf3016",
  },
});
