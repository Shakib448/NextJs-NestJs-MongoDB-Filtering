import { create } from "apisauce";

const apiClient = create({ baseURL: "http://localhost:5000" });
// const apiClient = create({
//   baseURL: "https://order-filtering.herokuapp.com",
// });

export default apiClient;
