import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portals from "./pages/Portals";
import Cinema from "./pages/Cinema";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portals />} />
        <Route path="/portal/behind-the-scenes" element={<Cinema />} />
        <Route path="*" element={<Portals />} />
      </Routes>
    </Router>
  );
};

export default App;
