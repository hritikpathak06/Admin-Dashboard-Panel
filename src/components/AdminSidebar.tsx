import { IoPeople } from "react-icons/io5";
import {
  RiDashboardFill,
  RiMoneyCnyBoxFill,
  RiShoppingBagFill,
} from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { LiProps } from "../@types/adminDashboardrTypes";
import { FiBarChart } from "react-icons/fi";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BiCoin, BiSolidOffer } from "react-icons/bi";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <>
      <aside>
        <h2>Logo.</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <Li
              url="/admin/dashboard"
              text="Dashboard"
              Icon={RiDashboardFill}
              location={location}
            />
            <Li
              url="/admin/product"
              text="Products"
              Icon={RiShoppingBagFill}
              location={location}
            />
            <Li
              url="/admin/customer"
              text="Customers"
              Icon={IoPeople}
              location={location}
            />
            <Li
              url="/admin/transaction"
              text="Transactions"
              Icon={RiMoneyCnyBoxFill}
              location={location}
            />
          </ul>
        </div>
        <div>
          <h5>Charts</h5>
          <ul>
            <Li
              url="/admin/chart/bar"
              text="Bar"
              Icon={FiBarChart}
              location={location}
            />
            <Li
              url="/admin/chart/pie"
              text="Pie"
              Icon={FaChartPie}
              location={location}
            />
            <Li
              url="/admin/chart/line"
              text="Line"
              Icon={FaChartLine}
              location={location}
            />
          </ul>
        </div>
        <div>
          <h5>Apps</h5>
          <ul>
            <Li
              url="/admin/app/stopwatch"
              text="Stopwatch"
              Icon={BsFillStopwatchFill}
              location={location}
            />
            <Li
              url="/admin/app/coupon"
              text="Coupon"
              Icon={BiSolidOffer}
              location={location}
            />
            <Li
              url="/admin/app/toss"
              text="Toss"
              Icon={BiCoin}
              location={location}
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <NavLink
        to={url}
        style={{
          color: location.pathname === url ? "rgb(0,115,255)" : "unset",
        }}
      >
        <Icon />
        {text}
      </NavLink>
    </li>
  );
};

export default AdminSidebar;
