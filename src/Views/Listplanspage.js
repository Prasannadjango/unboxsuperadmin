import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";






function Listplanspage() {

    const [Plans, setPlans] = useState([]);

    const [planName, setplanName] = useState("");
    const [planPrice, setplanPrice] = useState("");
    const [planDescription, setplanDescription] = useState("");
    const [planDetails, setplanDetails] = React.useState("");

    const initialList = [];

    const [list, setList] = React.useState(initialList);


    function handleChange(event) {
        setplanDetails(event.target.value);

    }

    function handleAdd() {
        const newList = list.concat({ planDetails });

        setList(newList);

    }
    // Add Package
    const Addpackage = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newpackage"), {
                Planname: planName,
                Planprice: planPrice,
                plandescription: planDescription,
                planlist: list

            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    // Display Data in Cards

    const fetchpackagedata = async () => {

        await getDocs(collection(db, "Newpackage"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setPlans(newData);
                console.log(Plans, newData);
            })

    }

    useEffect(() => {
        fetchpackagedata();
    }, [])
    return (
        <>
            <div className="d-flex content-wrapper w-100">

                <div className='col-8 me-3 '>
                    <div className="app-card overflow-container">
                        <h2>Plans section</h2>

                        <Row xl={2}>
                            <Col className="p-4">
                                <Card className='Price_card p-4 position-relative'>
                                    <span className="plan_tag">
                                        Basic plan
                                    </span>
                                    <h2 className="m-0 py-2">$10</h2>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius porta neque, quis sollicitudin nisl .
                                    </p>
                                    
                                     <ul className=" my-4 Plan_list px-2">
                                           <li >  Lorem ipsum dolor sit amet</li>
                                           <li >  Lorem ipsum dolor sit amet</li>
                                     </ul>
                                        <div className="Plandelete_btn">
                                              <Button variant="danger">
                                                <FaIcons.FaTrash/>
                                              </Button>
                                        </div>
                                     <Button className="btn">Update Plan</Button>
                                </Card>
                            </Col>
                            <Col className="p-4">
                                <Card className='Price_card p-4'>
                                    <span className="plan_tag">
                                       Silver plan
                                    </span>
                                    <h2 className="m-0 py-2">$30</h2>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius porta neque, quis sollicitudin nisl .
                                    </p>
                                    
                                     <ul className=" my-4 Plan_list px-2">
                                           <li >  Lorem ipsum dolor sit amet</li>
                                           <li >  Lorem ipsum dolor sit amet</li>
                                     </ul>
                                     <div className="Plandelete_btn">
                                              <Button variant="danger">
                                                <FaIcons.FaTrash/>
                                              </Button>
                                        </div>
                                     <Button className="btn">Update Plan</Button>
                                </Card>
                            </Col>
                            <Col className="p-4">
                                <Card className='Price_card p-4'>
                                    <span className="plan_tag">
                                      Gold plan
                                    </span>
                                    <h2 className="m-0 py-2">$30</h2>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius porta neque, quis sollicitudin nisl .
                                    </p>
                                    
                                     <ul className=" my-4 Plan_list px-2">
                                           <li >  Lorem ipsum dolor sit amet</li>
                                           <li >  Lorem ipsum dolor sit amet</li>
                                     </ul>
                                     <div className="Plandelete_btn">
                                              <Button variant="danger">
                                                <FaIcons.FaTrash/>
                                              </Button>
                                        </div>
                                     <Button className="btn">Update Plan</Button>
                                </Card>
                            </Col>
                            <Col className="p-4">
                                <Card className='Price_card p-4'>
                                    <span className="plan_tag">
                                     platinum plan
                                    </span>
                                    <h2 className="m-0 py-2">$30</h2>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius porta neque, quis sollicitudin nisl .
                                    </p>
                                    
                                     <ul className=" my-4 Plan_list px-2">
                                           <li >  Lorem ipsum dolor sit amet</li>
                                           <li >  Lorem ipsum dolor sit amet</li>
                                     </ul>
                                     <div className="Plandelete_btn">
                                              <Button variant="danger">
                                                <FaIcons.FaTrash/>
                                              </Button>
                                        </div>
                                     <Button className="btn">Update Plan</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="col-4">
                    <div className="app-card overflow-container p-4">
                        <Form >
                            <h3 className=" py-1"> Add new Plan</h3>
                            <label>Plan name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setplanName(e.target.value)} />
                            <label>Plan price</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setplanPrice(e.target.value)} />
                            <label>Plan Description</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setplanDescription(e.target.value)} />
                            <label>Plan List</label>
                            <Form className="d-flex col-10 " >
                                <Form.Control type="text" placeholder="First name" className='me-3'
                                    value={planDetails} onChange={handleChange} />
                                <Button className='col-3 py-1' onClick={handleAdd}>add list</Button>
                            </Form>


                            <ul>
                                {list.map((item) => (
                                    <li key={item.id}>{item.planDetails}</li>
                                ))}
                            </ul>
                            <Button variant="primary" type='submit' className='w-100 py-2 my-2 w-100' onClick={Addpackage}>
                                Add New Plan
                            </Button>

                        </Form>
                    </div>
                </div >
            </div>




        </>
    );
}
export default Listplanspage;