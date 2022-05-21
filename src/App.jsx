import SideBar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppRoute from "./AppRoute";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      {/* Main Layout */}
      <div className="app">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <AppRoute toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
}

export default App;
