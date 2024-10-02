import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e010103e1fe44230b06474322d1a3f94",
  },
});
