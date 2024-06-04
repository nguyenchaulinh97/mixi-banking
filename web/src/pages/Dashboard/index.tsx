import { useEffect, useState } from "react";
import { fetchNui } from "../../utils/fetchNui";
import DefaultLayout from "../_layouts/default";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { DASHBOARD_ANIMATION } from "./animations";
import { AnimatedWrapper, Container } from "./styles";
import { setAsJSON } from "../../utils/storage-key";

const accountMockData: UserData = {
  user: {
    name: "MIXIGAMING",
    gender: "male",
    friendList: [
      { name: "The Shawshank Redemption", accountNumber: 1994 },
      { name: "The Godfather", accountNumber: 1972 },
      { name: "The Godfather: Part II", accountNumber: 1974 },
      { name: "The Dark Knight", accountNumber: 2008 },
      { name: "12 Angry Men", accountNumber: 1957 },
    ],
  },
  statements: {
    balance: 1000000,
    cash: 5000,
    bills: [
      { org: "Bệnh viện", content: "Tiền chữa trĩ", amount: 120 },
      { org: "Taxi Doly", content: "Thanh toán tiền taxi", amount: 200 },
      { org: "Đồn cảnh sát Mixi", content: "Phạt quá tốc độ", amount: 200 },
      { org: "Đồn cảnh sát Mixi", content: "Đâm chết người", amount: 200 },
    ],
    transactionHistory: [
      {
        id: 1,
        type: "receive",
        amount: 12000,
        from: "Rambo",
        content: "Trả tiền thăm bà",
      },
      {
        id: 2,
        type: "send",
        amount: 500,
        to: "Đồn cảnh sát Mixi",
      },
      {
        id: 3,
        type: "receive",
        amount: 12000,
        from: "DjChip",
        content: "Trả tiền thăm bà",
      },
      { id: 4, type: "send", amount: 120, to: "Bệnh viện" },
    ],
  },
};

const Dashboard = () => {
  const [clientData, setClientData] = useState<UserData | null>(null);

  const handleGetClientData = () => {
    fetchNui<UserData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData(accountMockData);
        setAsJSON("accountData", accountMockData);
      });
  };

  useEffect(() => {
    handleGetClientData();
  }, []);

  return clientData ? (
    <DefaultLayout>
      <Container>
        <AnimatedWrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <SideBar />
          <MainContent />
        </AnimatedWrapper>
      </Container>
    </DefaultLayout>
  ) : (
    <DefaultLayout></DefaultLayout>
  );
};

export default Dashboard;
