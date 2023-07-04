import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Dashboard } from "./containers/Dashboard";
import { routeUrls } from "./constants/routeUrls";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routeUrls.default} element={<Dashboard />} />
        <Route path={routeUrls.dashboard} element={<Dashboard />} />
      </Routes>
    </div>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
