import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/Analyze";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Analyzer from "./pages/Analyzer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Analyze />} />
          <Route path="analyze" element={<Analyze />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="analyzer" element={<Analyzer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
