import React from "react";
import { Container, Box } from "@mui/material";

import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";

interface FunctionInterface {
  setStatus?: any;
  setPayment?: any;
  setOrderLimit?: any;
}

const Orders = ({
  setStatus,
  setPayment,
  setOrderLimit,
}: FunctionInterface) => {
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
