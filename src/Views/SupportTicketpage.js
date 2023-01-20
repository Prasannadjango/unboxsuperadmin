import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Row, Col, Card, Tabs, Tab, Table, Modal, Badge, Form, FormControl, Button } from "react-bootstrap";

export default function SupportTicketpage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="content-wrapper w-100">
                <div className="app-card overflow-container">
                    <h3>Support Tickets</h3>
                    <div className=" py-4">
                        <Row xs={1} xl={3} className="gx-3">
                            <Col >
                                <Card className="app-card p-4 border-0 ">
                                    <div className='icons_Container'>
                                        <FaIcons.FaRegClock />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="pe-4">Pending Tickets</h5>


                                    </div>
                                    <h2 className="fw-bolder pt-2">
                                        40
                                    </h2>

                                </Card>
                            </Col>
                            <Col >
                                <Card className="app-card p-4 border-0 ">
                                    <div className='icons_Container3'>
                                        <FaIcons.FaRegCheckCircle />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="pe-4">Resolved Tickets</h5>


                                    </div>
                                    <h2 className="fw-bolder pt-2">
                                        100
                                    </h2>

                                </Card>
                            </Col>
                            <Col >
                                <Card className="app-card p-4 border-0 ">
                                    <div className='icons_Container4'>
                                        <FaIcons.FaRegTimesCircle />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="pe-4">Cancelled Tickets</h5>


                                    </div>
                                    <h2 className="fw-bolder pt-2">
                                        100
                                    </h2>

                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className=' my-3'>
                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3 SupportTicket_tabs  justify-content-center"

                        >
                            <Tab eventKey="home" title="All" className>
                                <div className="app-card">
                                    <div className="mb-3">
                                        <Col xl={5}>
                                            <FormControl type='text' placeholder="Search for Ticket..." />
                                        </Col>
                                    </div>
                                    <Table bordered className="text-white">
                                        <thead>
                                            <tr>
                                                <th className="col-2">Ticket id</th>
                                                <th>Title</th>
                                                <th>Ticket Date</th>
                                                <th className="col-2">Status</th>
                                                <th className="col-1">Chat</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="col-2">
                                                    <Badge pill bg="warning" className="py-2 Ticket_badge">
                                                        Pending
                                                    </Badge>
                                                </td>
                                                <td className="col-1">
                                                    <Button className='fs-6' onClick={handleShow}>
                                                        <FaIcons.FaRegPaperPlane />
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="col-2">
                                                    <Badge pill bg="success" className="py-2 Ticket_badge">
                                                        Resolved
                                                    </Badge>
                                                </td>
                                                <td className="col-1">
                                                    <Button className='fs-6'>
                                                        <FaIcons.FaRegPaperPlane />
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="col-2">
                                                    <Badge pill bg="danger" className="py-2 Ticket_badge">
                                                        Cancelled
                                                    </Badge>
                                                </td>
                                                <td className="col-1">
                                                    <Button className='fs-6'>
                                                        <FaIcons.FaRegPaperPlane />
                                                    </Button>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </Table>
                                    <Modal show={show} onHide={handleClose} className='app-card text-white'>
                                        <Modal.Header >
                                            <Modal.Title>Ticket ID : #1231</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='Chat_container overflow-container'>
                                                <div className="position-relative">
                                                    <div className='Received_chat col-6 app-card p-2 mb-3'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </div>
                                                    <div className='Sender_chat col-6 app-card p-2'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="Texting_container d-flex ">
                                                <FormControl type='text' placeholder="send message..." className="text-white"/>
                                                <Button>
                                                    <FaIcons.FaShare/>
                                                </Button>
                                            </div>
                                        </Modal.Body>

                                        {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}


                                    </Modal>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Pending">
                                <div className="app-card">
                                    <div className="mb-3">
                                        <Col xl={5}>
                                            <FormControl type='text' placeholder="Search for Ticket..." />
                                        </Col>
                                    </div>
                                    <Table bordered className="text-white">
                                        <thead>
                                            <tr>
                                                <th className="col-2">Ticket id</th>
                                                <th>Title</th>
                                                <th>Ticket Date</th>
                                                <th>Update Status</th>
                                                <th className="col-1">Status</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="d-flex">
                                                    <Form.Check
                                                        inline
                                                        label="Resolved"

                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Cancelled"

                                                    />
                                                </td>
                                                <td className="col-1">
                                                    <Badge pill bg="warning" className="py-2 Ticket_badge">
                                                        Pending
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="d-flex">
                                                    <Form.Check
                                                        inline
                                                        label="Resolved"

                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Cancelled"

                                                    />
                                                </td>
                                                <td className="col-1">
                                                    <Badge pill bg="warning" className="py-2 Ticket_badge">
                                                        Pending
                                                    </Badge>
                                                </td>
                                            </tr>




                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Resolved" >
                                <div className="app-card">
                                    <div className="mb-3">
                                        <Col xl={5}>
                                            <FormControl type='text' placeholder="Search for Ticket..." />
                                        </Col>
                                    </div>
                                    <Table bordered className="text-white">
                                        <thead>
                                            <tr>
                                                <th className="col-2">Ticket id</th>
                                                <th>Title</th>
                                                <th>Ticket Date</th>
                                                <th className="col-2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="col-2">
                                                    <Badge pill bg="success" className="py-2 Ticket_badge">
                                                        Resolved
                                                    </Badge>
                                                </td>
                                            </tr>



                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                            <Tab eventKey="cancelled" title="Cancelled" >
                                <div className="app-card">
                                    <div className="mb-3">
                                        <Col xl={5}>
                                            <FormControl type='text' placeholder="Search for Ticket..." />
                                        </Col>
                                    </div>
                                    <Table bordered className="text-white">
                                        <thead>
                                            <tr>
                                                <th className="col-2">Ticket id</th>
                                                <th>Title</th>
                                                <th>Ticket Date</th>
                                                <th className="col-2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td className="col-2">#1231</td>
                                                <td>Student list</td>
                                                <td>12.2.22</td>
                                                <td className="col-2">
                                                    <Badge pill bg="danger" className="py-2 Ticket_badge">
                                                        Cancelled
                                                    </Badge>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );

}