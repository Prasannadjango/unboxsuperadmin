import React from "react";
import './Assets/Styles/Bootstrap5.css';
import './Assets/Styles/Main.css';
import Loginpage from "./Components/Loginpage";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboardpage from "./Components/Dashboardpage";
import Mainpage from "./Components/Mainpage";
import Homepage from "./Pages/Homepage";
import Listschool from "./Pages/Listschools";
import Listplans from "./Pages/Listplans";
function App() {
  return (
    <>
      <React.StrictMode>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Loginpage />} />
              <Route path="/home" element={<Dashboardpage />} />
              <Route path="/Mainpage" element={<Mainpage />} />
              <Route path="/Listschool" element={<Listschool />} />
              <Route path="/Listplans" element={<Listplans/>} />
            </Routes>

          </BrowserRouter>
        </ProSidebarProvider>

      </React.StrictMode>

    </>

  );
}

export default App;
