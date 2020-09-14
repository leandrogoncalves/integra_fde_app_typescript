import axios from "axios";

const api = axios.create({
  baseURL: "http://d-integra.fde.sp.gov.br",
});

export default api;
