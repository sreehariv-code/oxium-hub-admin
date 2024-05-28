import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import Assets from "./features/assets/Assets";
import AssetsLogs from "./features/assets/AssetsLogs";
import Auctions from "./features/auctions/Auctions";
import ChargePoints from "./features/assets/ChargePoints/ChargePoints";
import ChargePointDetail from "./features/assets/ChargePoints/ChargePointDetail";
import ChargeLogs from "./features/assets/ChargePoints/ChargeLogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="assets" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assets">
            <Route index element={<Navigate to="charge-points" />} />
            <Route path="charge-points">
              <Route index element={<ChargePoints />} />
              <Route path="charge-point-details">
                <Route index element={<ChargePointDetail />} />
                <Route path="charge-logs" element={<ChargeLogs />} />
              </Route>
            </Route>
            <Route path="log" element={<AssetsLogs />} />
          </Route>
          <Route path="auctions" element={<Auctions />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
