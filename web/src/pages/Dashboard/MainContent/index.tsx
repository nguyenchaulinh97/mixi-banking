import { useState } from "react";

import { CARDS_NAVIGATION, DEFAULT_TRANSITION } from "../../../constants";
import { getAsJSON, setAsJSON } from "../../../utils/storage-key";
import History from "./History";
import Invest from "./Invest";
import { CARDS_ANIMATION } from "./NavigationCards/animation";
import Payment from "./Payment";
import Transfer from "./Transfer";
import {
  AnimatedCard,
  AnimatedContainer,
  Container,
  Navigation,
} from "./styles";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<string>(
    getAsJSON("activeTab") || "Chuyển khoản"
  );
  const changeTab = (key: string) => {
    setActiveTab(key);
    setAsJSON("activeTab", key);
  };
  return (
    <Container>
      <AnimatedContainer>
        <Navigation>
          {Object.entries(CARDS_NAVIGATION).map(([key, value]) => (
            <AnimatedCard
              key={`card-${key}`}
              variants={CARDS_ANIMATION}
              transition={DEFAULT_TRANSITION}
              whileHover={{ y: -2, transition: DEFAULT_TRANSITION }}
              whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
              onClick={() => changeTab(key)}
            >
              <div>{value.icon}</div>
              {key}
            </AnimatedCard>
          ))}
        </Navigation>
      </AnimatedContainer>
      {/* <AccountSummary /> */}
      {activeTab === "Chuyển khoản" && <Transfer />}
      {activeTab === "Thanh toán" && <Payment />}
      {activeTab === "Đầu tư" && <Invest />}
      {activeTab === "Lịch sử" && <History />}
    </Container>
  );
};

export default MainContent;
