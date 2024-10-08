/* eslint-disable prettier/prettier */
import { LuFileLineChart } from "react-icons/lu";
import { AiOutlineTeam, AiOutlineWallet } from "react-icons/ai";
import { IoFolderOutline, IoLogInOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";
// import { MdOutlinePersonOutline } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import person from "../image/person.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-md text-black bg-white ${isOpen?"":"w-80"} `}>
      <div className="text-left p-2 flex">
        <span className="text-xs">🔴</span>
        <span className="text-xs cursor-pointer" onClick={() => setIsOpen((is) => !is)}>
          🟡
        </span>
        <span className="text-xs">🟢</span>
      </div>
      <div
        className={` ${isOpen ? "" : "border border-indigo-200 bg-opacity-25 "} justify-around cursor-pointer mx-2 my-2 flex items-center flex-col sm:flex-row`}>
          <img src={person} alt="person" className="rounded-full w-14"/>
        <div className="flex p-1 items-center flex-col sm:flex-row">
          <h4 className={`${isOpen ? "hidden" : "font-medium"}`}>Sara Smith</h4>
          {isOpen ? (
            ""
          ) : (
            <span>
              <CiCircleChevDown className="w-6 h-6 ml-2 text-blue-500 font-medium " />
            </span>
          )}
        </div>
      </div>
      <div>
        <Link
          to="/Dashboard"
          className=" p-4 sm:flex-row flex flex-col items-center  hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500">
          <span className="mx-1">
            <RxDashboard className="w-6 h-6" />
          </span>
          <span className={` ${isOpen ? "hidden" : "font-medium"}`}>Dashboard</span>
        </Link>
        <Link
          className="p-4 flex sm:flex-row  flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="Sales">
          <span className="mx-1">
            <LuFileLineChart className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>Sales Insights</span>
        </Link>
        <Link
          className="p-4 sm:flex-row  flex-col items-center flex hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/Coupons">
          <span className="mx-1">
            <RiCoupon2Line className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>Coupons</span>
        </Link>
        <Link
          className="p-4 sm:flex-row flex flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/TeamMember">
          <span className="mx-1">
            <AiOutlineTeam className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>Team Member</span>
        </Link>
        <Link
          className="p-4 sm:flex-row flex flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/Messages">
          <span className="mx-1">
            <BiMessageSquareDetail className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>Messages</span>
        </Link>
        <Link
          className="p-4 sm:flex-row flex flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/File">
          <span className="mx-1">
            <IoFolderOutline className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>File</span>
        </Link>
        <Link
          className="p-4 sm:flex-row flex flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/wallet">
          <span className="mx-1">
            <AiOutlineWallet className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>wallet</span>
        </Link>
        <Link
          className="p-4 sm:flex-row flex flex-col items-center hover:bg-indigo-500 hover:bg-opacity-25 hover:text-blue-500"
          to="/">
          <span className="mx-1">
            <IoLogInOutline className="w-6 h-6" />
          </span>
          <span className={`${isOpen ? "hidden" : "font-medium"}`}>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
