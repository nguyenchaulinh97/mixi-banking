import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import { getAsJSON } from "../../../../utils/storage-key";
import "./index.css";
import { AnimatedContainer } from "./styles";

const CustomTC = styled(TableCell)`
  font-size: 16px !important;
`;

const History = () => {
  const accountData = getAsJSON("accountData");
  const history = accountData?.statements?.transactionHistory;
  return (
    <AnimatedContainer>
      <h1>Lịch sử chuyển tiền</h1>
      <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <CustomTC>Loại</CustomTC>
              <CustomTC align="right">Người gửi</CustomTC>
              <CustomTC align="right">Người nhận</CustomTC>
              <CustomTC align="right">Số tiền</CustomTC>
              <CustomTC align="right">Nội dung</CustomTC>
            </TableRow>
          </TableHead>
          <TableBody>
            {history &&
              history.map((row) => (
                <TableRow
                  key={row.id}
                  className={row.type === "send" ? "sendRow" : "receiveRow"}
                >
                  <CustomTC component="th" scope="row">
                    {row.type === "send" ? "Gửi đi" : "Nhận vào"}
                  </CustomTC>
                  <CustomTC align="right">{row.from ? row.from : "-"}</CustomTC>
                  <CustomTC align="right">{row.to ? row.to : "-"}</CustomTC>
                  <CustomTC align="right">${row.amount}</CustomTC>
                  <CustomTC align="right">
                    {row.content ? row.content : ""}
                  </CustomTC>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AnimatedContainer>
  );
};

export default History;
