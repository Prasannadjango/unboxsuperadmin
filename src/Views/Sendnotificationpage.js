import React from "react";
import { Button, Form, FormControl, Col, Table } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import * as FaIcons from "react-icons/fa";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Sendnotificationpage() {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <div className="content-wrapper w-100">
                <div className="app-card overflow-container">
                    <h3>Send Notifications</h3>
                    <form className="my-4 app-card ">
                        <div className="d-flex">
                            <Form.Check
                                inline
                                label="All"
                                className="me-4"
                            />
                            <Form.Check
                                inline
                                label="Custom"

                            />
                        </div>
                        <div className="my-3">
                            <FormControl type='text' placeholder='Enter the School Name...' />
                        </div>
                        <div className="my-3">
                            <FormControl type='text' placeholder='Enter the Title...' />
                        </div>
                        <div className="my-3">
                            <FormControl type='text' as="textarea" rows={5} placeholder='Enter the Message...' />
                        </div>

                        <div className="d-flex ">
                            <Col xl={2}>
                                <Button className='btn btn-primary w-100'>Submit</Button>
                            </Col>
                        </div>
                    </form>
                    <h3 >Previous Notifications</h3>

                    <div className="app-card">
                        <div className="d-flex justify-content-between mb-3">
                            <div>
                                <FormControl type='text' placeholder="Search for Notifications.." />
                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs} className='bg-white'>
                                    <TimePicker
                                        label="From time"
                                        className="me-3"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>

                                <LocalizationProvider dateAdapter={AdapterDayjs} className='bg-white'>
                                    <TimePicker
                                        label="To time"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <Table className="text-white " bordered>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Type</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sample</td>
                                    <td>12.3.22</td>
                                    <td>10.34 am</td>
                                    <td>All</td>
                                    <td>
                                        <Button>
                                            <FaIcons.FaEye />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sample</td>
                                    <td>12.3.22</td>
                                    <td>10.34 am</td>
                                    <td>All</td>
                                    <td>
                                        <Button>
                                            <FaIcons.FaEye />
                                        </Button>
                                    </td>
                                </tr>



                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </>
    );

}