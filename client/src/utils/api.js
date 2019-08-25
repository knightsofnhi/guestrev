import axios from "axios";

export default {
  authUser: function(email, password) {
    return axios.post("/api/user/auth", { email, password });
  }
};
