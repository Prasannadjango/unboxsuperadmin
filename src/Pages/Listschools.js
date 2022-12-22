import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Sidemenu from "../Components/Sidebar";
import Listschoolpage from "../Views/Listschoolpage";
import { Navigate} from "react-router-dom";
function Listschool() {
    const Getautheticate = localStorage.getItem('login');
    if(Getautheticate === 'true'){
        return (
            <>
                <div className="d-flex">
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