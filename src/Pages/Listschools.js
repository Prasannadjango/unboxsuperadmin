import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Sidemenu from "../Components/Sidebar";
import Listschoolpage from "../Views/Listschoolpage";

function Listschool() {
    return (
        <>
            <div className="d-flex">
                <Sidemenu />
                <Listschoolpage />
            </div>
        </>
    );

}
export default Listschool;