import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-[#F3FFF9] to-green-100 flex justify-center">
      <div className="w-full max-w-[390px] flex flex-col min-h-screen">

        {/* Page content */}
        <div className="flex-1 overflow-y-auto pb-20">
          <Outlet />
        </div>

        {/* Bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
