import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { collection, addDoc, collectionGroup, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import * as FaIcons from "react-icons/fa";
import { useForm } from "react-hook-form";
import { v4 as uuid } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TablePagination from '@mui/material/TablePagination';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { styled } from '@mui/system';
import { async } from "@firebase/util";

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
    const [Teachers, setTeachers] = useState([]);
    // Add teacher form variables

    const [teacherfirstName, setTeacherfirstName] = useState("");
    const [teacherlastName, setTeacherlastName] = useState("");
    const [teacherphonenumber, setTeacherphonenumber] = useState("");
    const [teacherMail, setTeacherMail] = useState("");
    const [teacherDob, setTeacherDob] = useState("");
    const [teacherQualification, setTeacherQualification] = useState("");
    const [teacherExperience, setTeacherExperience] = useState("");
    const [teacherDoj, setTeacherDoj] = useState("");
    const [teacherAddress, setTeacherAddress] = useState("");
    const [teacherFathername, setTeacherFathername] = useState("");
    const [teacherCity, setTeacherCity] = useState("");
    const [teacherPincode, setTeacherPincode] = useState("");

    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);

    const search = (data) => {
        return data.filter(
            (item) =>
                item.teacherfirstname.toLowerCase().includes(query) ||
                item.teacherphonenumber.toLowerCase().includes(query) ||
                item.teachercity.toLowerCase().includes(query)
        );
    }
    // Add new teacher


    // pagination varibles
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const blue = {
        200: '#A5D8FF',
        400: '#3399FF',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E7EBF0',
        200: '#E0E3E7',
        300: '#CDD2D7',
        400: '#B2BAC2',
        500: '#A0AAB4',
        600: '#6F7E8C',
        700: '#3E5060',
        800: '#2D3843',
        900: '#1A2027',
    };
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Teachers.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const CustomTablePagination = styled(TablePaginationUnstyled)(
        ({ theme }) => `
        & .${classes.spacer} {
          display: none;
        }
      
        & .${classes.toolbar}  {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
      
          @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
          }
        }
      
        & .${classes.selectLabel} {
          margin: 0;
        }
      
        & .${classes.select}{
          padding: 2px;
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
          border-radius: 50px;
          background-color: transparent;
      
          &:hover {
            background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
          }
      
          &:focus {
            outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
          }
        }
      
        & .${classes.displayedRows} {
          margin: 0;
      
          @media (min-width: 768px) {
            margin-left: auto;
          }
        }
      
        & .${classes.actions} {
          padding: 2px;
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
          border-radius: 50px;
          text-align: center;
        }
      
        & .${classes.actions} > button {
          margin: 0 8px;
          border: transparent;
          border-radius: 2px;
          background-color: transparent;
      
          &:hover {
            background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
          }
      
          &:focus {
            outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
          }
        }
        `,
    );

    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [updatefirstname, setUpdatefirstname] = useState('');
    const [updatelastname, setUpdatelastname] = useState('');
    const [updatefathername, setUpdatefathername] = useState('');
    const [updatecity, setUpdatecity] = useState('');
    const [updatemailid, setUpdatemailid] = useState('');
    const [updatephonenumber, setUpdatephonenumber] = useState('');
    const [updateaddress, setUpdateaddress] = useState('');
    const [updatedob, setUpdatedob] = useState('');
    const [updatedateofjoin, setUpdatedateofjoin] = useState('');
    const [updatepincode, setupdatepincode] = useState('');
    const [updatequalification, setUpdatequlaification] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const changedfirstname = useRef(null);
    const changedlastname = useRef(null);
    const changedfathername = useRef(null);
    const changedcity = useRef(null);
    const changedemail = useRef(null);
    const changedphonenumber = useRef(null);
    const changedDob = useRef(null);
    const changeddateofjoin = useRef(null);
    const changedpincode = useRef(null);
    const changedqualification = useRef(null);

    const [showteacherinfo, setShowteacherinfo] = useState(false);
    //    const handleClose = () => setShowteacherinfo(false);
    //    const handleShow = () => setShowteacherinfo(true);


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

    const [newschooldata, setNewschooldata] = useState([]);
    const auth = getAuth(app);

    //    function for create a collection
    const sub = async (e) => {
        e.preventDefault();


        try {

            const docRef = await addDoc(collection(db, 'Newschool/' + schoolName + '/schools'), {
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

            <div className="content-wrapper d-flex">
                <div className='col-8 me-2'>
                    <div className="app-card">
                        <div className='py-2 d-flex justify-content-between'>
                            <h3>school list</h3>
                            <div className="col-7">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='search-bar   ' />

                            </div>
                        </div>
                        <Table className='content-bg'>
                            <thead >
                                <tr >

                                    <th>Name</th>

                                    <th>Phone number</th>

                                    <th>city</th>

                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="position-relative tbscrollable">


                                {
                                    retrieving ? (

                                        <div className="Loader">
                                            <h6 className="text-center">Loading...</h6>
                                        </div>

                                    ) :
                                        (rowsPerPage > 0
                                            ? search(Teachers).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : Teachers
                                        ).map((row, i) => (
                                            <tr >
                                                <td>{row.teacherfirstname}</td>
                                                <td>{row.teacherphonenumber}</td>
                                                <td>{row.teachercity}</td>

                                                <td>
                                                    <Button key={i} className='bg-primary text-white me-3  text-center '  ><FaIcons.FaEdit className="fs-6" onClick={handleShow} /></Button>
                                                    <Button className='bg-danger text-white border-0'><FaIcons.FaTrashAlt /></Button>
                                                </td>
                                            </tr>
                                        ))}

                                {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )}


                            </tbody>
                            <tfoot>

                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={Teachers.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            'aria-label': 'rows per page',
                                        },
                                        actions: {
                                            showFirstButton: true,
                                            showLastButton: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    className='bg-clr2 text-light'
                                />



                            </tfoot>
                        </Table>
                    </div>

                    {/* Teacher update data modal */}

                    <Modal show={showteacherinfo} onHide={handleClose} className='app-card'>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Teacher info</Modal.Title>
                        </Modal.Header>



                        <Form className='p-3'>



                            <label>first name</label>
                            <Form.Control type="text" ref={changedfirstname} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatefirstname} />
                            <label>Last name</label>
                            <Form.Control type="text" ref={changedlastname} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatelastname} />
                            <label>Father name</label>
                            <Form.Control type="text" ref={changedfathername} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatefathername} />
                            <label>City</label>
                            <Form.Control type="text" ref={changedcity} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatecity} />

                            <label>Mail</label>
                            <Form.Control type="text" ref={changedemail} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatemailid} />
                            <label>Phone number</label>
                            <Form.Control type="text" ref={changedphonenumber} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatephonenumber} />
                            <label>Dob</label>
                            <Form.Control type="date" ref={changedDob} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatedob} />
                            <label>date of Joining</label>
                            <Form.Control type="date" ref={changeddateofjoin} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatedateofjoin} />
                            <label>Pin code</label>
                            <Form.Control type="text" ref={changedpincode} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatepincode} />
                            <label>Qualification</label>
                            <Form.Control type="text" ref={changedqualification} placeholder="First name" className='py-2 my-2'
                                defaultValue={updatequalification} />





                            <Button variant="primary" >
                                Save Changes
                            </Button>

                        </Form>


                    </Modal>
                </div>
                <div className="col-4">
                    <div className="app-card overflow-container  p-4">
                        <Form >
                            <h3 className=" py-1"> Add new Teacher</h3>
                            <label>First name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setTeacherfirstName(e.target.value)} />
                            <label>Last name</label>
                            <Form.Control type="text" placeholder="Last name" className='py-2 mb-2'
                                onChange={(e) => setTeacherlastName(e.target.value)} />
                            <label>Phone number</label>
                            <Form.Control type="text" placeholder="phone number" className='py-2 mb-2'
                                onChange={(e) => setTeacherphonenumber(e.target.value)} />
                            <label>Email Address</label>
                            <Form.Control type="text" placeholder="Email" className='py-2 mb-2'
                                onChange={(e) => setTeacherMail(e.target.value)} />
                            <label>Date Of Birth</label>
                            <Form.Control type="date" placeholder="DOB" className='py-2 mb-2'
                                onChange={(e) => setTeacherDob(e.target.value)} />
                            <label>Qualification</label>
                            <Form.Control type="text" placeholder="Qualification" className='py-2 mb-2'
                                onChange={(e) => setTeacherQualification(e.target.value)} />
                            <label>Experience</label>
                            <Form.Control type="text" placeholder="Experience" className='py-2 mb-2'
                                onChange={(e) => setTeacherExperience(e.target.value)} />
                            <label>Date of Joining</label>
                            <Form.Control type="date" placeholder="Date of Joining" className='py-2 mb-2'
                                onChange={(e) => setTeacherDoj(e.target.value)} />
                            <label>Address</label>
                            <Form.Control type="text" placeholder="Address" className='py-2 mb-2'
                                onChange={(e) => setTeacherAddress(e.target.value)} />
                            <label>Father/spouse Name</label>
                            <Form.Control type="text" placeholder="Father/spouse Name" className='py-2 mb-2'
                                onChange={(e) => setTeacherFathername(e.target.value)} />
                            <label>City</label>
                            <Form.Control type="text" placeholder="city" className='py-2 mb-2'
                                onChange={(e) => setTeacherCity(e.target.value)} />
                            <label>Pin-code</label>
                            <Form.Control type="number" placeholder="pin code" className='py-2 mb-2'
                                onChange={(e) => setTeacherPincode(e.target.value)} />


                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' >
                                Add New teacher
                            </Button>

                        </Form>
                    </div>
                </div>


            </div>


        </>
    );

}

export default Listschoolpage;
