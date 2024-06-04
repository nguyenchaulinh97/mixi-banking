import { Input } from "@mui/material";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { css, styled } from "styled-components";
import Button from "../../../components/Button";
import { NavButton } from "../../../components/Header/AccountDropdown/styles";
import { DEFAULT_TRANSITION } from "../../../constants";
import useAppTheme from "../../../contexts/theme";
import AccountBalance from "./AccountBalance";
import { AnimatedContainer, Wrapper } from "./styles";

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, ...DEFAULT_TRANSITION },
  },
};

const Container = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(#530d0d, #ff1600);
    width: 100%;
    border-radius: ${theme.radii.small};
    border: 4px solid white;
  `}
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: #4a0a05c9;
  width: 100%;
  align-items: center;
`;

const Content = styled.div`
  padding: 6rem 2rem 10rem 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  input {
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.3rem;
    color: white;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 28px;
  margin-top: 16px;
  background: orange;
  color: white;
  font-weight: bold;
  &:hover {
    background: #ff500f;
  }
`;

const Wrap = styled.div`
  margin: 3.8rem 0;
`;

const SideBar = () => {
  const { currentTheme, toggleTheme } = useAppTheme();
  const [withDrawValue, setWithDrawValue] = useState<string>();
  const [depositValue, setDepositValue] = useState<string>();

  const handleWithDraw = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWithDrawValue(e.target.value);
  };
  const handleDeposit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDepositValue(e.target.value);
  };

  return (
    <Wrapper>
      <AnimatedContainer variants={animation}>
        <AccountBalance />
        {/* <AnimatedAmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            RÚT TIỀN
          </span>
          <AiOutlineImport size="1.6rem" />
        </AnimatedAmountInvested>
        <AnimatedAmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            GỬI TIỀN
          </span>
          <AiOutlineExport size="1.6rem" />
        </AnimatedAmountInvested> */}
        <Wrap>
          <Container>
            <Head>Rút tiền</Head>
            <Content>
              <Input
                type="number"
                value={withDrawValue}
                onChange={handleWithDraw}
              />
            </Content>
          </Container>
          <StyledButton>RÚT</StyledButton>
        </Wrap>
        <Wrap>
          <Container>
            <Head>Gửi tiền</Head>
            <Content>
              <Input
                type="number"
                value={depositValue}
                onChange={handleDeposit}
              />
            </Content>
          </Container>
          <StyledButton>GỬI</StyledButton>
        </Wrap>
        <NavButton onClick={toggleTheme}>
          {currentTheme === "light" ? <FiMoon /> : <FiSun />}
          Đổi theme
        </NavButton>
        {/* {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
          <Accordion key={key} icon={value.icon} sectionName={key} />
        ))} */}
      </AnimatedContainer>
      {/* <HelpDesk /> */}
    </Wrapper>
  );
};

export default SideBar;
