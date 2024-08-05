import { FaBasketShopping } from "react-icons/fa6";
import { TbShoppingBagX } from "react-icons/tb";
import { BsBagPlusFill } from "react-icons/bs";
import { BiTargetLock, BiDish } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineAnalytics } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { IoWalletOutline, IoBagCheckOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

const status = {
  INCREASED: "INCREASED",
  DECREASED: "DECREASED",
};

const dashboardMetricsData = [
  {
    name: "Total Orders",
    count: 75,
    percent: "3%",
    Icon: FaBasketShopping,
    status: status.INCREASED,
    backgroundColor: "#27336a",
    icnColor: "#3f65ff",
  },
  {
    name: "Total Delivered",
    count: 70,
    percent: "3%",
    Icon: FaBasketShopping,
    status: status.DECREASED,
    backgroundColor: "#145347",
    icnColor: "#00ca8c",
  },
  {
    name: "Total Cancelled",
    count: "05",
    percent: "3%",
    Icon: TbShoppingBagX,
    status: status.INCREASED,
    backgroundColor: "#633136",
    icnColor: "#f15c5a",
  },
  {
    name: "Total Revenue",
    count: "$12k",
    percent: "3%",
    Icon: BsBagPlusFill,
    status: status.DECREASED,
    backgroundColor: "#5a2c48",
    icnColor: "#e241a0",
  },
];

const overviewData = [
  {
    name: "Goals",
    Icon: BiTargetLock,
    backgroundColor: "#633136",
    icnColor: "#f15c5a",
  },
  {
    name: "Popular Dishes",
    Icon: GiHamburger,
    backgroundColor: "#27336a",
    icnColor: "#3f65ff",
  },
  {
    name: "Menus",
    Icon: BiDish,
    backgroundColor: "#204a60",
    icnColor: "#3299b9",
  },
];

const createFeedback = (name, image, rating, review) => {
  return { name, image, rating, review };
};

const customerFeedbackData = [
  createFeedback(
    "Jenny Wilson",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
  createFeedback(
    "Dianne RussellA",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    5,
    "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
  ),
  createFeedback(
    "Devon Lane",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
  createFeedback(
    "Jenny Wilson",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4.5,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
  createFeedback(
    "Jenny Wilson",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
  createFeedback(
    "Dianne RussellA",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    5,
    "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
  ),
  createFeedback(
    "Devon Lane",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
  createFeedback(
    "Jenny Wilson",
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg",
    4.5,
    "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  ),
];

const sampleChartData = {
  labels: [
    "7",
    "8",
    "2",
    "3",
    "9",
    "11",
    "1",
    "2",
    "10",
    "11",
    "2",
    "3",
    "6",
    "7",
    "9",
    "10",
    "11",
    "1",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
  ],
  datasets: [
    {
      data: [
        2, 1, 1, 1, 3, 1, 1, 1, 2, 3, 1, 2, 3, 4, 6, 2, 4, 6, 3, 2, 4, 2, 3, 1,
      ],
      backgroundColor: "#7393ff",
      fill: true,
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    datalabels: {
      render: "value",
      align: "end",
      anchor: "end",
      display: "auto",
      color: "black",
      font: {
        size: 14,
      },
      rotation: 0,
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
  tooltips: {
    mode: "label",
    intersect: false,
  },
  elements: {
    point: {
      pointStyle: "circle",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

const sidebarMenu = [
  {
    name: "Home",
    Icon: IoMdHome,
  },
  {
    name: "Analytics",
    Icon: MdOutlineAnalytics,
  },
  {
    name: "Todo",
    Icon: LuClipboardCheck,
  },
  {
    name: "Wallet",
    Icon: IoWalletOutline,
  },
  {
    name: "Cart",
    Icon: IoBagCheckOutline,
  },
];

function createData(name, orderNo, amount, status, avatar) {
  return { name, orderNo, amount, status, avatar };
}

const orderStatusKeys = {
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  PENDING: "Pending",
};

const orderTablerows = [
  createData(
    "Wade Warren",
    15478256,
    "124.00",
    orderStatusKeys.DELIVERED,
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg"
  ),
  createData(
    "Jane Cooper",
    48965786,
    "365.02",
    orderStatusKeys.DELIVERED,
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial_user4_xgryfs.jpg"
  ),
  createData(
    "Guy Hawkins",
    78958215,
    "45.88",
    orderStatusKeys.CANCELLED,
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonials_user_01_mmxepr.jpg"
  ),
  createData(
    "Kristin Watson",
    20965732,
    "65.00",
    orderStatusKeys.PENDING,
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg"
  ),
  createData(
    "Cody Fisher",
    95715620,
    "545.00",
    orderStatusKeys.DELIVERED,
    "https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial_user4_xgryfs.jpg"
  ),
];

const goalGraphdata = {
  labels: [""],
  datasets: [
    {
      label: "percentage",
      data: [70, 30],
      backgroundColor: ["#7393ff", "#293364"],
      borderWidth: 0,
    },
  ],
};

const goalGraphOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "70%",
};

export {
  dashboardMetricsData,
  status,
  overviewData,
  customerFeedbackData,
  sampleChartData,
  chartOptions,
  sidebarMenu,
  orderTablerows,
  orderStatusKeys,
  goalGraphdata,
  goalGraphOptions,
};
