import React from "react";
import { Navigate} from "react-router-dom";
import Mainpage from "./Mainpage";



function Dashboardpage() {
    
    const Getautheticate = localStorage.getItem('authenticated');
   
    if (Getautheticate === 'true') {
        return (
            <>
              <Mainpage/>
              
            </>
        );
    }
    else {
        return<Navigate to="/" replace />
    }
}

export default Dashboardpage;