import React from "react";
import Sidemenu from "../Components/Sidebar";
import Listplanspage from "../Views/Listplanspage";
import { Navigate} from "react-router-dom";
import Navbar from "../Components/Navbar";

function Listplans(){
  const Getautheticate = localStorage.getItem('login');
    if (Getautheticate === 'true'){
      return(
        <>
        <div className="app">
        <Navbar/>
          <div className="d-flex pt-as">
                <Sidemenu/>
                <Listplanspage/>
          </div>
        </div>
        </>
    );
    }
    else{
      return<Navigate to="/" replace />
    }
}
export default Listplans;