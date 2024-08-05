import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import "./OrdersTable.css";
import { orderStatusKeys, orderTablerows } from "../../Constants/DashboardData";

const OrdersTable = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-first-column table-head-text">
              Customer
            </TableCell>
            <TableCell className="table-head-text">Order No.</TableCell>
            <TableCell className="table-head-text">Amount</TableCell>
            <TableCell className="table-head-text">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderTablerows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "none !important",
                },
              }}
            >
              <TableCell
                className="table-border-none table-first-column"
                component="th"
                scope="row"
              >
                <div className="display-flex">
                  <img
                    src={row.avatar}
                    alt={row.name}
                    className="table-avatar"
                  />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="table-border-none">{row.orderNo}</TableCell>
              <TableCell className="table-border-none">${row.amount}</TableCell>
              <TableCell className="table-border-none">
                <p
                  className={`display-flex delivery-status ${
                    row.status === orderStatusKeys.DELIVERED
                      ? "status-delivered"
                      : "status-cancelled"
                  }`}
                >
                  {row.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
