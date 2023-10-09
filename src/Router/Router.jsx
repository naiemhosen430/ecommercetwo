import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DashboardMain from "../Pages/Dashboard/Layout/DashboardMain";
import Profile from "../Pages/Dashboard/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EditProfile from "../Pages/Dashboard/EditProfile";
import Balance from "../Pages/Dashboard/Balance";
import Withdraw from "../Pages/Dashboard/Withdraw";
import Members from "../Pages/Dashboard/Members";
import Cetagory from "../Pages/Cetagory/Cetagory";
import Project from "../Pages/Project/Project";
import Pricing from "../Pages/Pricing/Pricing";
import Search from "../Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cetagory",
        element: <Cetagory />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/search/:text",
        element: <Search />,
      },
      {
        path: "/dashboard",
        element: <DashboardMain />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/edit-profile",
            element: <EditProfile />,
          },
          {
            path: "/dashboard/balance",
            element: <Balance />,
          },
          {
            path: "/dashboard/withdraw",
            element: <Withdraw />,
          },
          {
            path: "/dashboard/members",
            element: <Members />,
          },
        ],
      },
    ],
  },
]);

export default router;
