import React from "react";
import Sidemenu from "../Components/Sidebar";
import Listplanspage from "../Views/Listplanspage";


function Listplans(){
    return(
        <>
          <div className="d-flex">
                <Sidemenu/>
                <Listplanspage/>
          </div>
        </>
    );
}
export default Listplans;