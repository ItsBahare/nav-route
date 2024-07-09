/* eslint-disable prettier/prettier */
import { Route, Routes } from "react-router-dom";
import Coupons from "./Coupons/Coupons";
import NotUse from "./Coupons/NotUse";
import Used from "./Coupons/used";

function RouteNav() {
  return (
    <Routes>
      <Route path="/" element={<div className="content">This is Home</div>} />
      <Route path="/Dashboard" element={<div className="content"> This is dashboard</div>} />
      <Route path="/Sales" element={<div className="content">This is Sales Insights</div>} />
      <Route path="/Coupons" element={<Coupons />}>
        <Route index element={<NotUse />} />
        <Route path=":id" element={<Used />} />
      </Route>
      <Route path="/TeamMember" element={<div className="content">This is Team Member</div>} />
      <Route path="/Messages" element={<div className="content">This is Messages</div>} />
      <Route path="/File" element={<div className="content">This is File Manager</div>} />
      <Route path="/wallet" element={<div className="content">This is Wallet</div>} />
    </Routes>
  );
}
export default RouteNav;
