import React from "react";

import Sidemenu from "../Components/Sidebar";

import { Navigate} from "react-router-dom";
import Navbar from "../Components/Navbar";
import SupportTicketpage from "../Views/SupportTicketpage";
function SupportTicket() {
    const Getautheticate = localStorage.getItem('login');
    if(Getautheticate === 'true'){
        return (
            <>
             <div className='app'>
             <Navbar/>
                <div className="d-flex pt-as">
                    <Sidemenu />
                    <SupportTicketpage/>
                </div>
                </div>
           
            </>
        );
    }
    else{
        return<Navigate to="/" replace />
      }

}
export default SupportTicket;