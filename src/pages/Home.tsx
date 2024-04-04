
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to={"/admin/dashboard"}>
        <button>Visit Dashboard</button>
      </NavLink>
    </div>
  );
};

export default Home;
