import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

function Sidemenu() {
   return (
      <>
         <Sidebar>
            <Menu>
               <MenuItem icon={<FaIcons.FaHome className="fs-5" />} routerLink={<Link to="/Mainpage" />} > Dashboard</MenuItem>
               <MenuItem icon={<FaIcons.FaSchool className="fs-5" />} routerLink={<Link to="/Listschool" />} >Manage Schools</MenuItem>
               <MenuItem icon={<FaIcons.FaCommentsDollar className="fs-5" />} routerLink={<Link to="/Listplans" />} >Plans</MenuItem>
               <MenuItem icon={<FaIcons.FaBell className="fs-5" />} routerLink={<Link to="/Listplans" />} >Send Notifications</MenuItem>
               
            </Menu>
         </Sidebar>

      </>
   );
}

export default Sidemenu;