import React from "react";
import { Container, Box, Backdrop, CircularProgress } from "@mui/material";

import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";

interface FunctionInterface {
  setStatus(value: string): string;
  setPayment(value: string): string;
  setOrderLimit(value: string): string;
  loading: boolean;
}

const Orders = ({
  setStatus,
  setPayment,
  setOrderLimit,
  loading,
}: FunctionInterface) => {
  return (
    <Container maxWidth="lg">
      <OrderForm
        statusFunc={(value: string) => setStatus(value)}
        paymentFunc={(value: string) => setPayment(value)}
        orderLimitFunc={(value: string) => setOrderLimit(value)}
      />
      <Box mt={4} mb={4}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <OrderTable />
      </Box>
    </Container>
  );
};

export default Orders;
