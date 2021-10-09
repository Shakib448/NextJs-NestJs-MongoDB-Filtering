import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";

import Layout from "../src/Components/Layout";
import Orders from "../src/Components/Orders/Order";
import orderApi from "../pages/api/order";
import { useAppDispatch } from "../src/redux/hooks";
import { orderAction } from "../src/redux/slices/orderSlice";

interface Props {
  data: any[];
}

const Home = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");
  const [orderLimit, setOrderLimit] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductBySearch = async () => {
      if (status || payment || orderLimit) {
        setLoading(true);
        const { data } = await orderApi.getQueryOrderProducts(
          status,
          payment,
          orderLimit
        );
        setLoading(false);

        dispatch(orderAction(data));
      }
    };
    getProductBySearch();

    if (!status && !payment && !orderLimit) {
      dispatch(orderAction(data));
    }
  }, [dispatch, status, orderLimit, payment, data]);

  return (
    <Layout title="Order">
      <Orders
        setStatus={setStatus}
        setPayment={setPayment}
        setOrderLimit={setOrderLimit}
        loading={loading}
      />
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
