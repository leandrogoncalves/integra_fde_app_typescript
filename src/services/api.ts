import axios from "axios";

const api = axios.create({
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
  baseURL: "http://d-integra.fde.sp.gov.br",
  // responseType: "json",
  // withCredentials: false,
});

export default api;
