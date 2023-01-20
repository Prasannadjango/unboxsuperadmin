import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import Loginpageimg from '../Assets/Images/Logoimage.svg';
import { TextField, Button } from '@mui/material';
import { collection, addDoc, getDocs, getDoc,doc, collectionGroup } from "firebase/firestore";
import { db } from "../firebase-config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  
  } from "firebase/auth";
  import { app } from '../firebase-config';


// const snapshot = await db.firestore().collection('e').get()
// return snapshot.docs.map(doc => doc.data());

function Loginpage() {


//     const [Schoolid,setschoolid] = useState('');



const [pets, setPets] = useState([]);
const [collectionIds, setCollectionIds] = useState([])

  const fetchschoolid = async ()=>{
    await fetch('https://Unbox.cloudfunctions.net/Newschool')
    .then(response => response.json())
    .then(({ data }) => setCollectionIds(data))
    console.log("Id response",collectionIds);

  }



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
                 <Button onClick={fetchschoolid}>click me</Button>
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
