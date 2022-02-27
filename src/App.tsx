import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DashboardLayout } from "components/layouts";
import { ComingSoon, Dashboard } from "views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
