import { CARDS_NAVIGATION, DEFAULT_TRANSITION } from "../../../../constants";
import { setAsJSON } from "../../../../utils/storage-key";
import { CARDS_ANIMATION, CONTAINER_ANIMATION } from "./animation";
import { AnimatedCard, AnimatedContainer, Navigation } from "./styles";

const NavigationCards = () => {
  const changeTab = (key: string) => {
    setAsJSON("activeTab", key);
  };
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
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
  );
};

export default NavigationCards;
