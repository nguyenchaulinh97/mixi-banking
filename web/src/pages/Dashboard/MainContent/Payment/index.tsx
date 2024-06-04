import { Box, Grid } from "@mui/material";
import { getAsJSON } from "../../../../utils/storage-key";
import { AnimatedContainer } from "./styles";
import styled from "styled-components";
import Button from "../../../../components/Button";

const StyledBox = styled(Box)`
  background: orange;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  display: grid;
  color: black;
  margin: 2rem 0;
`;

const Payment = () => {
  const accountData = getAsJSON("accountData");
  const bills = accountData?.statements?.bills;
  return (
    <AnimatedContainer>
      <h1>Thanh toán</h1>
      <Grid container spacing={1}>
        {bills?.map((bill) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <StyledBox>
                <h1>{bill?.org}</h1>
                <h2>"{bill?.content}"</h2>
                <h2>${bill?.amount}</h2>
                <Button>Thanh toán</Button>
              </StyledBox>
            </Grid>
          );
        })}
      </Grid>
    </AnimatedContainer>
  );
};

export default Payment;
