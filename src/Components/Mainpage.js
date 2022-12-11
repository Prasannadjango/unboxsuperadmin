import React from "react";
import Homepage from "../Pages/Homepage";
import Sidemenu from "./Sidebar";




function Mainpage() {
    return (
        <>

            <div className="d-flex">
                <Sidemenu />
                <Homepage />
            </div>

        </>
    );
}

export default Mainpage;