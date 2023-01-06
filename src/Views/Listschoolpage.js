import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { collection, addDoc,collectionGroup, query, where, getDocs} from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import { useForm } from "react-hook-form";
import { v4 as uuid } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// 
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  
  } from "firebase/auth";
  import { app } from '../firebase-config.js';
import { TextField } from '@mui/material';
import { phoneRegExp, EmailRegExp, numberRegExp, PasswordRegExp } from '../Variables/Regex';


// yup resolver conditions

const schema = yup.object({
    SchoolName: yup.string().required("Schoolname is Required"),

    phoneNumber: yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must 10 Digits").max(10, "Phone number must 10 Digits"),
    SchoolEmail: yup.string().required('SchoolEmail is Required').matches(EmailRegExp, 'Email is Not Valid'),

    password: yup.string().required('Password is required')
        .matches(PasswordRegExp, 'Password is Weak , Password must have Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),

}).required();



function Listschoolpage() {
    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   


 

    const [schools, setSchools] = useState([]);

    // Form variables
    const [schoolName, setSchoolName] = useState("");
    const [schoolEmail, setSchoolEmail] = useState("");
    const [schoolPhonenumber, setSchoolPhoneNumber] = useState("");
    const [schoolAddress, setSchoolAddress] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");
    const [schoolInfo, setSchoolInfo] = useState("");
    const [schoolPassword, setSchoolPassword] = useState("");
    const unique_id = uuid();
    const [uniqueschoolId, setSchooluniqueid] = useState(schoolName.slice(0, 2) + unique_id.slice(0, 5));
    
    const [newschooldata,setNewschooldata] = useState([]);
    const auth = getAuth(app);
 
    //    function for create a collection
    const sub = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, schoolEmail, schoolPassword)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          alert('successfully created an account');
         
          // ...
        })
       
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
        });

        try {

            const docRef = await addDoc(collection(db, 'New school'), {
                schoolname: schoolName,
                schoolemail: schoolEmail,
                schoolphonenumber: schoolPhonenumber,
                schooladdress: schoolAddress,
                schoollocation: schoolLocation,
                schoolinfo: schoolInfo,
                schoolpassword: schoolPassword
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchschooldata = async () => {

        await getDocs(collection(db, "Newschool/c1b0c/schools"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setSchools(newData);
                console.log(schools, newData);
            })

    }

    useEffect(() => {
        fetchschooldata();
      
    }, [])


 


 
    return (
        <>
        <div className="bgclr">
                <div className="bg-white">
                    <div className='p-4 d-flex justify-content-between'>
                        <h3>School list</h3>
                        <Button onClick={handleShow}>Add New School</Button>
                    </div>
                    <Table striped bordered hover >
                        <thead className="tablerowcolor">
                            <tr>
                                <th>#id</th>
                                <th>School Name</th>

                                <th>Phone number</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th className="col-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                schools?.map((school, i) => (

                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{school.schoolname}</td>

                                        <td>{school.schoolphonenumber}</td>
                                        <td>{school.schoollocation}</td>

                                        <td>Active</td>
                                        <td>
                                            <Button variant="contained" className='bg-success text-white me-3  text-center' ><FaIcons.FaEye /></Button>
                                            <Button variant="contained" className='bg-primary text-white me-3  text-center'><FaIcons.FaEdit /></Button>
                                            <Button variant="contained" className='bg-danger text-white'><FaIcons.FaTrashAlt /></Button>
                                        </td>
                                    </tr>


                                ))
                            }


                        </tbody>
                    </Table>

                    {
                       newschooldata?.map((schl,i) =>(
                        <p>{schl}</p>
                       ))
                    }
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new School</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >
                                <h4 className='py-3'>School Information</h4>
                                <TextField
                                    id="outlined-textarea"
                                    label="Schoolname"
                                    value={schoolName}
                                    {...register("SchoolName")}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolName(e.target.value)}

                                />
                                <p className='text-danger'>{errors.SchoolName?.message}</p>
                                <TextField
                                    id="outlined-textarea"
                                    label="School Email"
                                    value={schoolEmail}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolEmail(e.target.value)}

                                />

                                <TextField
                                    id="outlined-textarea"
                                    label="School phone-number"
                                    value={schoolPhonenumber}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolPhoneNumber(e.target.value)}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="School Info"
                                    value={schoolInfo}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolInfo(e.target.value)}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="School location"
                                    value={schoolLocation}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolLocation(e.target.value)}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="School Address"
                                    value={schoolAddress}
                                    className='w-100 my-2 '
                                    onChange={(e) => setSchoolAddress(e.target.value)}
                                />
                            
                                <TextField
                                    id="outlined-textarea"
                                    label="School Password"
                                    value={schoolPassword}
                                    className='w-100 my-2 '
                                    type='password'
                                    onChange={(e) => setSchoolPassword(e.target.value)}
                                />

                                <Button variant="primary" type='submit' className='w-100 py-3 my-2' onClick={sub}>
                                    Save Changes
                                </Button>

                            </Form>
                        </Modal.Body>



                    </Modal>
                </div>
        </div>


        </>
    );

}

export default Listschoolpage;
