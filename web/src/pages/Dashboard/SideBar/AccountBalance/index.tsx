import { Balance, BalanceContainer } from "./styles";

import { styled } from "styled-components";
import { currencyFormat } from "../../../../utils/format-currency";
import { getAsJSON } from "../../../../utils/storage-key";

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.8rem;
`;

const AccountBalance = () => {
  // const { statements } = useAuth().account;

  const accountData = getAsJSON("accountData");

  // const [currency, accountBalance] = useMemo(() => {
  //   const balance = statements?.reduce(
  //     (acc, { balance, outcome }) => balance + outcome + acc,
  //     0
  //   );

  //   return formatCurrency(balance).split(" ");
  // }, [statements]);

  return (
    <>
      <BalanceContainer>
        <Div>
          <Balance>
            <span>Tài khoản:</span>
            {/* <AnimatePresence>
              {isHidden && (
                <BalanceSecret setIsValueVisible={setIsValueVisible} />
              )}
            </AnimatePresence> */}
            <div>
              <strong>
                {/* {isValueVisible ? accountData?.statements?.balance : "---"} */}
                {currencyFormat(accountData?.statements?.balance)}
              </strong>
            </div>
          </Balance>
          {/* <Button
            variant="transparent"
            onClick={() => setIsHidden((prevState) => !prevState)}
          >
            {isHidden ? <FiEyeOff /> : <FiEye />}
          </Button> */}
          <Balance>
            <span>Tiền mặt:</span>
            <div>
              <strong>
                {/* {isValueVisible ? accountData?.statements?.cash : "---"} */}
                {currencyFormat(accountData?.statements?.cash)}
              </strong>
            </div>
          </Balance>
        </Div>
      </BalanceContainer>
    </>
  );
};

export default AccountBalance;
