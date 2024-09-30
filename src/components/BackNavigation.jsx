import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function BackNavigation() {
  return (
    <Link
      to={"/"}
      className="flex mx-auto justify-center items-center mt-5 font-bold cursor-pointer">
      <IoMdArrowBack className="mt-1 font-bold" />
      <span> BACK </span>
    </Link>
  );
}

export default BackNavigation;
