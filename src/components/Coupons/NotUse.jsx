/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
function NotUse() {
  return (
    <>
      <Link  className="coupons" to="/NotUse">NotUse</Link>
      <br/>
      <Link className="coupons" to=":id">Used</Link>
    </>
  );
}

export default NotUse;
