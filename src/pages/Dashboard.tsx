import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import { WidgetItemProps } from "../@types/adminDashboardrTypes";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIlzGp1laQheiAAjrbJJ3pasHLjMBnIUEZg&usqp=CAU";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="" />
        </div>

        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            value={340000}
            amount={true}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            amount={false}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            amount={false}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            amount={false}
            heading="Products"
            color="rgb(75,76,0,255)"
          />
        </section>
      </main>
    </div>
  );
};

const WidgetItem = ({
  heading,
  value,
  percent,
  amount,
  color,
}: WidgetItemProps) => {
  return (
    <>
      <article className="widget">
        <div className="widgetInfo">
          <p>{heading}</p>
          <h4>{amount ? `$${value}` : value}</h4>
          {percent > 0 ? (
            <span className="green">
              <HiTrendingUp /> +{percent}%
            </span>
          ) : (
            <span className="red">
              <HiTrendingDown /> -{percent}%
            </span>
          )}
        </div>

        <div
          className="widgetCircle"
          style={{
            background: `conic-gradient(
            ${color} ${(Math.abs(percent) / 100) * 360}deg,
            rgba(255,255,255,0) 0
          )`,
          }}
        >
          <span style={{ color: color }}>{percent}%</span>
        </div>
      </article>
      ;
    </>
  );
};

export default Dashboard;
