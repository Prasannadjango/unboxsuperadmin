import React from "react";
import Homepage from "../Pages/Homepage";
import Navbar from "./Navbar";
import Sidemenu from "./Sidebar";




function Mainpage() {
    return (
        <>
              <Navbar/>
            <div className="d-flex pt-as">
               
                <Sidemenu />
                <Homepage />
            </div>

        </>
    );
}

export default Mainpage;