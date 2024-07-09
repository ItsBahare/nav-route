import { Outlet } from "react-router-dom";

function Coupons() {
  return (
    <>
      <div className="content">This is Coupons</div>
      <Outlet />
    </>
  );
}

export default Coupons;
