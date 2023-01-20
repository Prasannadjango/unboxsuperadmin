import React from "react";
import { Sidebar } from "react-pro-sidebar";
import Sidemenu from "../Components/Sidebar";

import { Navigate} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sendnotificationpage from "../Views/Sendnotificationpage";
function Sendnotification() {
    const Getautheticate = localStorage.getItem('login');
    if(Getautheticate === 'true'){
        return (
            <>
             <div className='app'>
             <Navbar/>
                <div className="d-flex pt-as">
                    <Sidemenu />
                    <Sendnotificationpage/>
                </div>
                </div>
           
            </>
        );
    }
    else{
        return<Navigate to="/" replace />
      }

}
export default Sendnotification;