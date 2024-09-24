
import { Link } from "react-router-dom";
function NotUse() {
  return (
    <>
      <Link
        className="m-4 hover:text-red-600 hover:border-none hover:border-b hover:border-b-red-600"
        to="/NotUse">
        NotUse
      </Link>
      <br />
      <Link
        className="m-4 hover:text-red-600 hover:border-none hover:border-b hover:border-b-red-600"
        to=":id">
        Used
      </Link>
    </>
  );
}

export default NotUse;
