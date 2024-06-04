import { Autocomplete, Input, TextField } from "@mui/material";
import { AnimatedContainer } from "./styles";
import { styled } from "styled-components";
import Button from "../../../../components/Button";
import { getAsJSON } from "../../../../utils/storage-key";

const StyledTextField = styled(TextField)`
  color: black;
  background: white;
  height: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  span {
    font-size: 18px !important;
  }
  label {
    font-size: 18px !important;
  }
`;

const StyledInput = styled(Input)`
  color: black;
  background: white;
  font-size: 30px !important;
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Transfer = () => {
  const accountData = getAsJSON("accountData");
  const friendList = accountData?.user?.friendList;

  return (
    <AnimatedContainer>
      <h1 style={{ marginBottom: "2rem" }}>Chuyển khoản</h1>
      {friendList ? (
        <Autocomplete
          multiple
          id="tags-outlined"
          options={friendList}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(event, value) => console.log(value)}
          renderInput={(params) => {
            return (
              <StyledTextField
                {...params}
                label="Người nhận"
                placeholder="Chọn người nhận"
              />
            );
          }}
        />
      ) : (
        <StyledInput placeholder="Nhập số tài khoản người nhận" type="number" />
      )}

      <StyledInput placeholder="Nhập số tiền chuyển" type="number" />
      <StyledInput placeholder="Nhập nội dung" type="text" />
      <Button style={{ margin: "0 auto" }}>XÁC NHẬN CHUYỂN TIỀN</Button>
    </AnimatedContainer>
  );
};

export default Transfer;
