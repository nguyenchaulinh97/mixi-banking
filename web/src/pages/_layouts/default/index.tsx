import { PropsWithChildren } from "react";
import Header from "../../../components/Header";

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
