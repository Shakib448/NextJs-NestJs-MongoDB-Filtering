import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
// import { useDispatch } from "react-redux";

import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
// import orderApi from "../../api/order";
// import { orderAction } from "../../redux/slices/orderSlice";

const Orders = () => {
  //   const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");
  const [orderLimit, setOrderLimit] = useState("");

  //   useEffect(() => {
  //     const getProductBySearch = async () => {
  //       if (status || payment || orderLimit) {
  //         const { data } = await orderApi.getQueryOrderProducts(
  //           status,
  //           payment,
  //           orderLimit
  //         );
  //         dispatch(orderAction(data));
  //       }
  //     };

  //     if (!status && !payment && !orderLimit) {
  //       const getAdminProducts = async () => {
  //         const { data, ok } = await orderApi.getAllAdminProduct();
  //         if (ok) dispatch(orderAction(data));
  //       };
  //       getAdminProducts();
  //     }

  //     getProductBySearch();
  //   }, [dispatch, status, payment, orderLimit]);

  return (
    <Container maxWidth="lg">
      <OrderForm
        statusFunc={(value: string) => setStatus(value)}
        paymentFunc={(value: string) => setPayment(value)}
        orderLimitFunc={(value: string) => setOrderLimit(value)}
      />
      <Box mt={4} mb={4}>
        <OrderTable />
      </Box>
    </Container>
  );
};

export default Orders;
