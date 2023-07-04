import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";

import { Dashboard } from "./containers/Dashboard";
import { routeUrls } from "./constants/routeUrls";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={routeUrls.default} element={<Dashboard />} />
          <Route path={routeUrls.dashboard} element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
