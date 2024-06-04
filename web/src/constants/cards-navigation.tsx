import { FiBarChart2, FiCreditCard, FiRepeat } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";

export default {
  "Chuyển khoản": {
    icon: <FiRepeat />,
  },
  "Thanh toán": {
    icon: <MdOutlinePayments />,
  },
  "Đầu tư": {
    icon: <FiBarChart2 />,
  },
  "Lịch sử": {
    icon: <FiCreditCard />,
  },
  // 'Gift Card': {
  //   icon: <FiGift />,
  // },
  // Seguros: {
  //   icon: <FiUmbrella />,
  // },
} as const;
