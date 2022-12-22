import React from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BaIcons from "react-icons/bs";
import Logo from '../Assets/Images/Logoimage.svg';
import { Button } from "@mui/material";
import { app } from '../firebase-config.js';
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
const auth = getAuth(app);
function Navbar() {
    const navigate = useNavigate();

    const logout = () => {

        signOut(auth).then(() => {
            localStorage.removeItem('login');
            navigate('/');
            alert('logout done')
        }).catch((error) => {

        });

    }
    return (
        <>
            <div className="d-flex position-fixed Navbar_main py-2 px-3 ">
                <div className="Navbar_logo">
                    {/* <img src={Logo} className='w-100 h-100' /> */}
                    <h2>unbox</h2>
                </div>
                <div className="Navbar_logo">
                    <Button onClick={logout}>
                        <FaIcons.FaSignOutAlt className="text-dark fs-5" />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Navbar;