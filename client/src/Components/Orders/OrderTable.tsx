import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { makeStyles, createStyles } from "@mui/styles";
import clsx from "clsx";
import moment from "moment";

import { useAppSelector } from "../../../src/redux/hooks";
import { adminOrderSelector } from "../../../src/redux/slices/orderSlice";

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 1024,
      padding: "10px 20px",
    },
    tableContainer: {
      height: "400px",
    },
  })
);

export default function OrderTable() {
  const classes = useStyles();

  const { orders } = useAppSelector(adminOrderSelector);

  return (
    <TableContainer className={clsx(classes.tableContainer)} component={Paper}>
      <Table
        stickyHeader
        aria-label="sticky table"
        className={clsx(classes.table)}
      >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">ID</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Delivery Address</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Payment</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Status</Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item) => (
            <Row key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  isDelver: {
    color: "#00C58D",
    fontWeight: "bold",
  },
  isProcessing: {
    color: "#666D92",
    fontWeight: "bold",
  },
  isFailed: {
    color: "#FC5C63",
    fontWeight: "bold",
  },

  isPending: { color: "#2067FA", fontWeight: "bold" },
});

function Row({ item }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.order_id}
        </TableCell>
        <TableCell align="center">{item.deliveryAddress}</TableCell>
        <TableCell align="center">{item.paymentMethod}</TableCell>
        <TableCell
          align="center"
          className={clsx({
            [classes.isDelver]: item.status === "Delivered",
            [classes.isProcessing]: item.status === "Processing",
            [classes.isPending]: item.status === "Pending",
            [classes.isFailed]: item.status === "Failed",
          })}
        >
          {item.status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">Contact</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.history.map((historyItem) => (
                    <TableRow key={historyItem.date}>
                      <TableCell component="th" scope="row">
                        {moment(historyItem.date).format("YYYY-MM-DD")}
                      </TableCell>
                      <TableCell>{historyItem.customerId}</TableCell>
                      <TableCell align="center">
                        {historyItem.contact}
                      </TableCell>
                      <TableCell align="center">${historyItem.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
