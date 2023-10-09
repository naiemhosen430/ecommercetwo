import { Outlet } from "react-router-dom";
import SideBer from "../Components/Shared/SideBer";

export default function DashboardMain() {
  return (
    <>
      <div className="flex items-start grid-cols-12 justify-center space-x-1">
        <SideBer />
        <Outlet />
      </div>
    </>
  );
}
