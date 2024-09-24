import { Outlet } from "react-router-dom";

function Coupons() {
  return (
    <>
      <div className="mx-auto text-center">This is Coupons</div>
      <Outlet />
    </>
  );
}

export default Coupons;
