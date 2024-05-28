import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import AssetsLogs from "./features/assets/AssetsLogs";
import Auctions from "./features/auctions/Auctions";
import ChargePoints from "./features/assets/ChargePoints/ChargePoints";
import ChargePointDetail from "./features/assets/ChargePoints/ChargePointDetail";
import ChargeLogs from "./features/assets/ChargePoints/ChargeLogs";
// import AdminAssets from "./features/assets/AdminAssets";
// import SellerAssets from "./features/assets/SellerAssets";
// import BidderAssets from "./features/assets/BidderAssets";
import { useData } from "./context/DataContext";

function AssetsRouter() {
  const { userType } = useData();

  return (
    <Routes>
      <Route index element={<Navigate to={`${userType}`} />} />
      <Route path="admin" element={<div>Admin Assets</div>} />
      <Route path="seller" element={<div>Seller Assets</div>} />
      <Route path="bidder" element={<div>Bidder Assets</div>} />
      <Route path="log" element={<AssetsLogs />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="assets" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assets/*" element={<AssetsRouter />} />
          <Route path="auctions" element={<Auctions />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
