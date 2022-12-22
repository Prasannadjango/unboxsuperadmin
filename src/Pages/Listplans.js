import React from "react";
import Sidemenu from "../Components/Sidebar";
import Listplanspage from "../Views/Listplanspage";
import { Navigate} from "react-router-dom";

function Listplans(){
  const Getautheticate = localStorage.getItem('login');
    if (Getautheticate === 'true'){
      return(
        <>
          <div className="d-flex">
                <Sidemenu/>
                <Listplanspage/>
          </div>
        </>
    );
    }
    else{
      return<Navigate to="/" replace />
    }
}
export default Listplans;