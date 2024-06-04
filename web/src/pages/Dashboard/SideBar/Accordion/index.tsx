import React from "react";

import { FiChevronDown } from "react-icons/fi";

import { Container } from "./styles";
import { CSSProperties } from "styled-components";

export type AccordionProps = {
  icon: React.ReactNode;
  sectionName: string;
};

const useHover = (
  styleOnHover: CSSProperties,
  styleOnNotHover: CSSProperties = {}
) => {
  const [style, setStyle] = React.useState(styleOnNotHover);

  const onMouseEnter = () => setStyle(styleOnHover);
  const onMouseLeave = () => setStyle(styleOnNotHover);

  return { style, onMouseEnter, onMouseLeave };
};

const Accordion = ({ icon, sectionName }: AccordionProps) => {
  const hover = useHover({
    backgroundColor: "#FF500F",
    borderRadius: "8px",
    padding: "1rem",
  });
  return (
    <Container {...hover} variant="transparent">
      <div>{icon}</div>
      {sectionName}
      <FiChevronDown />
    </Container>
  );
};

export default Accordion;
