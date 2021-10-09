import React from "react";
import { GetStaticProps } from "next";

import Layout from "../src/Components/Layout";
import Orders from "../src/Components/Orders/Order";
import orderApi from "../pages/api/order";
import { useAppDispatch } from "../src/redux/hooks";
import { orderAction } from "../src/redux/slices/orderSlice";

interface Props {
  data: {
    _id: string;
    history: any[];
    status: string;
    paymentMethod: string;
    deliveryAddress: string;
    order_id: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Home = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  dispatch(orderAction(data));

  return (
    <Layout title="Order">
      <Orders />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await orderApi.getAllOrder();
  return {
    props: { data, revalidate: 1 },
  };
};
