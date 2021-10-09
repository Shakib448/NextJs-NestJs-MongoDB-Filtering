import client from "./client";
import endpoint from "./endpoint";

const getAllOrder = () => client.get(endpoint.orders);
const getQueryOrderProducts = (
  status: string,
  payment: string,
  orderLimit: string
) =>
  client.get(
    endpoint.orders +
      `?status=${status}&payment=${payment}&orderLimit=${orderLimit}`
  );

// eslint-disable-next-line
export default { getAllOrder, getQueryOrderProducts };
