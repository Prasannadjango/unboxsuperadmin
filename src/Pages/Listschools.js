import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Sidemenu from "../Components/Sidebar";
import Listschoolpage from "../Views/Listschoolpage";
import { Navigate} from "react-router-dom";
import Navbar from "../Components/Navbar";
function Listschool() {
    const Getautheticate = localStorage.getItem('login');
    if(Getautheticate === 'true'){
        return (
            <>
            <Navbar/>
                <div className="d-flex pt-as">
                    <Sidemenu />
                    <Listschoolpage />
                </div>
            </>
        );
    }
    else{
        return<Navigate to="/" replace />
      }

}
export default Listschool;