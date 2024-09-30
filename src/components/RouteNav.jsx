/* eslint-disable prettier/prettier */
import { Route, Routes } from "react-router-dom";
import Coupons from "./Coupons/Coupons";
import NotUse from "./Coupons/NotUse";
import Used from "./Coupons/used";
import BackNavigation from "./BackNavigation";

function RouteNav() {
  return (
    <Routes>
      <Route path="/" element={<div className="text-center mx-auto">This is Home</div>} />
      <Route
        path="/Dashboard"
        element={
          <div className="text-center mx-auto">
            This is dashboard <BackNavigation />
          </div>
        }
      />
      <Route
        path="/Sales"
        element={
          <div className="text-center mx-auto">
            This is Sales Insights <BackNavigation />
          </div>
        }
      />
      <Route
        path="/Coupons"
        element={
          <>
            <Coupons /> <BackNavigation />
          </>
        }>
        <Route index element={<NotUse />} />
        <Route path=":id" element={<Used />} />
      </Route>
      <Route
        path="/TeamMember"
        element={
          <div className="text-center mx-auto">
            This is Team Member
            <BackNavigation />
          </div>
        }
      />
      <Route
        path="/Messages"
        element={
          <div className="text-center mx-auto">
            This is Messages
            <BackNavigation />
          </div>
        }
      />
      <Route
        path="/File"
        element={
          <div className="text-center mx-auto">
            This is File Manager
            <BackNavigation />
          </div>
        }
      />
      <Route path="/wallet" element={<div className="text-center mx-auto">This is Wallet</div>} />
    </Routes>
  );
}
export default RouteNav;
