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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assets">
            <Route index element={<Assets />} />
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
