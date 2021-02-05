import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardBody } from 'reactstrap';
import '../css/LecturerProfile.css'


class LecturerProfile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div>
                        <h1>Welcome to LSMS</h1>
                        <h2>Lecturer Dashboard</h2>
                        <p className="text-muted">
                            Shedule a Lecture
                        </p>
                    </div>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Department</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>EIE</option>
                                        <option>CEE</option>
                                        <option>MME</option>
                                        <option>IS</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Hall</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>DO1</option>
                                        <option>DO2</option>
                                        <option>NLH1</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelect">Module</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>EE4302</option>
                                        <option>EE2301</option>
                                        <option>IS1201</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Select time slots</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>7.30 am-8.30 am</option>
                                        <option>8.30 am-9.30 am</option>
                                        <option>9.30 am-10.30 am</option>
                                        <option>10.30 am-11.30 am</option>
                                        <option>11.30 am-12.30 am</option>
                                        <option>12.30 pm-13.30 pm</option>
                                        <option>13.30 pm-14.30 pm</option>
                                        <option>14.30 pm-15.30 pm</option>
                                        <option>15.30 pm-16.30 pm</option>
                                        <option>17.30 pm-18.30 pm</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Add text</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile"> Scanned Letter</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        Include the request letter in here
                                    </FormText>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <legend>Note that</legend>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            If I cancel the lecturer,I will inform to the admin
                                            and remove shedule time 30 mins before.
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default LecturerProfile;
