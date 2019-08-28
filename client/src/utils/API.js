import axios from "axios";

export default {
  saveData: function(revData) {
    return axios.post("/api/revenue", revData);
  }
};
