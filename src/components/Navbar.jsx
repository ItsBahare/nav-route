/* eslint-disable prettier/prettier */
import { LuFileLineChart } from "react-icons/lu";
import { AiOutlineTeam, AiOutlineWallet } from "react-icons/ai";
import { IoFolderOutline, IoLogInOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="circle">
        <span>🔴</span>
        <span className="close" onClick={() => setIsOpen((is) => !is)}>
          🟡
        </span>
        <span>🟢</span>
      </div>
      <div className="person">
        <div className="person_img">
          <span>
            <MdOutlinePersonOutline />
          </span>
        </div>
        <div className="person_detail">
          <h4 className={`${isOpen ? "hidden" : ""}`}>Jimmy Smith</h4>
        </div>
      </div>
      <div className="nav-link-list">
        <Link to="/Dashboard" className="nav-link">
          <div>
            <span className="icon">
              <RxDashboard />
            </span>
            <span className={`${isOpen ? "hidden" : ""}`}>dashboard</span>
          </div>
        </Link>
        <Link className="nav-link" to="Sales">
          <span className="icon">
            <LuFileLineChart />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>Sales Insights</span>
        </Link>
        <Link className="nav-link" to="/Coupons">
          <span className="icon">
            <RiCoupon2Line />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>Coupons</span>
        </Link>
        <Link className="nav-link" to="/TeamMember">
          <span className="icon">
            <AiOutlineTeam />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>Team Member</span>
        </Link>
        <Link className="nav-link" to="/Messages">
          <span className="icon">
            <BiMessageSquareDetail />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>Messages</span>
        </Link>
        <Link className="nav-link" to="/File">
          <span className="icon">
            <IoFolderOutline />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>File</span>
        </Link>
        <Link className="nav-link" to="/wallet">
          <span className="icon">
            <AiOutlineWallet />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>wallet</span>
        </Link>
        <Link className="nav-link" to="/">
          <span className="icon">
            <IoLogInOutline />
          </span>
          <span className={`${isOpen ? "hidden" : ""}`}>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
