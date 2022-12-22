import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Loginpageimg from '../Assets/Images/Logoimage.svg';
import { TextField, Button } from '@mui/material';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  
  } from "firebase/auth";
  import { app } from '../firebase-config';
function Loginpage() {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const auth = getAuth(app);
    const signin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          localStorage.setItem('login','true');
          console.log(user);
          
           navigate('/home');
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           alert('invalid user-name and password')
        });
      
      }
    return (
        <>
            <div className="Loginpage_container px-4">

                <Row xl={2} className='align-items-center'>
                    <Col>
                        <img src={Loginpageimg} />
                    </Col>
                    <Col >
                        <Form className='Login_form' onSubmit={signin}>
                            <h3 className='pb-3 fw-bold'>Login</h3>
                            
                            <div>
                                <TextField id="outlined-basic" label="E-mail" variant="outlined" className='w-100 '
                                    type="text"
                                    name="Email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="my-4">
                                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' className='w-100 '
                                  
                                    name="Password"
                                    onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <Button variant="contained" type='sumbit' className='w-100 py-3 text-uppercase Login_Btn'>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Loginpage;
