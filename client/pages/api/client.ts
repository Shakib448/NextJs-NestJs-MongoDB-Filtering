import { create } from "apisauce";

const apiClient = create({ baseURL: process.env.NEXT_PUBLIC_URI });
// const apiClient = create({ baseURL: "http://localhost:5000" });

export default apiClient;
