import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import {
  CategoryItemProps,
  WidgetItemProps,
} from "../@types/adminDashboardrTypes";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

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

        <section className="graphContainer">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190, 118]}
              data_2={[100, 354, 638, 805, 971, 144, 164, 567]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i, index) => (
                <CategoryItem
                  key={index}
                  value={i.value}
                  heading={i.heading}
                  color={`hsl(${i.value * 5},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["female", "male"]}
              data={[12, 25]}
              backgroundColor={["hsl(340,82%,56%)", "hsl(30,82%,56%)"]}
              // cutout=}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
          <DashboardTable data={data.transaction}/>
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

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>
      <div>
        <div style={{ backgroundColor: color, width: `${value}%` }}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;
