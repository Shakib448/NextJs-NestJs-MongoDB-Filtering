import { create } from "apisauce";

const apiClient = create({ baseURL: process.env.NEXT_PUBLIC_URI });

export default apiClient;
