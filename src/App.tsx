import { Suspense, lazy } from "react";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactons"));
const Home = lazy(() => import("./pages/Home"))


const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/"  element={<Home/>} />
          <Route path="/admin/dashboard"  element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/* Charts Section */}

          {/* Apps */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
