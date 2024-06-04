import { FiArrowRight } from "react-icons/fi";

import { HELPDESK_ANIMATION } from "./animations";
import { AnimatedContainer, HelpButton } from "./styles";

import { useNavigate } from "react-router-dom";
import BabiHelpDesk from "../../../../assets/images/illustrations/babi.png";
import { getAsJSON } from "../../../../utils/storage-key";

const HelpDesk = () => {
  const accountData = getAsJSON("accountData");
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <AnimatedContainer variants={HELPDESK_ANIMATION}>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        {`Olá, ${accountData?.user?.name}.`} <br /> Posso Ajudar?
      </span>
      <HelpButton>
        <FiArrowRight onClick={signOut} size={24} />
      </HelpButton>
    </AnimatedContainer>
  );
};

export default HelpDesk;
