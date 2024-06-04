import { memo } from "react";

import Gradient from "./Gradient";
import { CONTAINER_ANIMATION } from "./animations";
import { AnimatedContainer, Wrapper } from "./styles";

const Header = () => {
  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          letterSpacing: "1.5rem",
        }}
      >
        {/* <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <img
            src={BankingLogo}
            style={{ height: "100%", marginLeft: "90%" }}
          />
        </AnimatedLeftNav>
        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <AccountDropdown />
        </AnimatedRightNav> */}
        <h1>MIXI BANK</h1>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};

export default memo(Header);
