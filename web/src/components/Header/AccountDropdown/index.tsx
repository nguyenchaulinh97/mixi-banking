import { useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

import { DROP_DOWN_ANIMATION } from "./animations";
import { AnimatedDropdown, Container, NavButton } from "./styles";

import useAppTheme from "../../../contexts/theme";
import Button from "../../Button";
import { getAsJSON } from "../../../utils/storage-key";

const AccountDropdown = () => {
  const { currentTheme, toggleTheme } = useAppTheme();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const [accountData, setAccountData] = useState(getAsJSON("accountData"));

  useEffect(() => {
    setAccountData(getAsJSON("accountData"));
  }, []);

  return (
    <Container onClick={handleDropdownVisibility}>
      <Button style={{ fontSize: "3rem" }}>
        Welcome, {accountData?.user?.gender === "male" ? `Mr` : "Ms"}
        {accountData?.user?.name}
      </Button>
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <NavButton onClick={toggleTheme}>
                {currentTheme === "light" ? <FiMoon /> : <FiSun />}
                Đổi theme
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccountDropdown;
