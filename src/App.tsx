import { Suspense, lazy } from "react";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactons"));
const Home = lazy(() => import("./pages/Home"));
const NewProduct = lazy(() => import("./pages/Spec/NewProduct"));
const ManageProduct = lazy(() => import("./pages/Spec/ManageProduct"));
const ManageTransaction = lazy(() => import("./pages/Spec/ManageTransaction"));


const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/* Charts Section */}

          {/* Apps */}

     
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ManageProduct />} />
          <Route path="/admin/transaction/:id" element={<ManageTransaction />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
