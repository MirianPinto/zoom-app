import "./zoom.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyZoom()
{
    return(
    
        <div style={{ width: "90%" }}>
            <div className="container-header">
                <h1 className="title-pacientes">Zoom</h1>

            </div>
            <div className="container-controls">
                {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}

                <Container fluid="md">
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Topic</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                            <Form.Control type="Topic" placeholder="Enter topic" />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Description(optional)</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Enter meeting description" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>When</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px", display:"flex"}} >
                            <Form.Control
                             type="date" 
                             placeholder="" 
                             style={{ width: "200px", marginRight: "10px" }}/>

                            <Form.Control
                                required
                                type="number"
                                placeholder="cantidad"
                                defaultValue="0"
                                min={1}
                                max={12}
                                style={{ width: "60px", marginRight: "10px" }}
                            />

                            <Form.Select aria-label="Default select example" style={{ width: "80px"}}>

                                <option value="1">PM</option>
                                <option value="2">AM</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Duration</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px", display:"flex"}} xs="1">
                            <Form.Control
                            required
                            type="number"
                            placeholder="cantidad"
                            defaultValue="0"
                            min={0}
                            max={5}
                            style={{ width: "60px", marginRight: "10px" }}
                            />
                            <p style={{paddingTop:"6px"}}>hr</p>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px", display:"flex"}} >
                            <Form.Control
                            required
                            type="number"
                            placeholder="cantidad"
                            defaultValue="0"
                            min={0}
                            max={59}
                            style={{ width: "60px", marginRight: "10px" }}
                            />
                             <p style={{paddingTop:"6px"}}>min</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Time Zone</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">(GMT-7:00)Pacific Time (US and Canada)</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Recurring meeting"}
                                    />
                                    </div>
                                ))}
                            </Form>

                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Registration</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                            <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Required"}
                                    />

                                   
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Security</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px" }} >
                                <div style={{ display:"flex",alignItems:"flex-start"}}>
                                    <Form >
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            disabled
                                            checked
                                            type={type}
                                            label={"Passcode"}
                                            id={`disabled-default-${type}`}
                                            style={{marginTop:"5px"}}
                                        />
                                        
                                        
                                        </div>
                                        
                                    ))}
                                    </Form>
                                    <Form.Control  style={{marginLeft:"10px", width: "100px", marginBottom:"0px"}} type="email" placeholder="289399" />
                            </div>
                            <Form.Text className="text-muted" >
                                Only users who have the invite link or passcode can join the meeting
                            </Form.Text>
                            
                            <Form style={{marginTop:"35px", marginBottom:"0px"}}>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Waiting room"}
                                    />

                                   
                                    </div>
                                ))}

                                <Form.Text className="text-muted" >
                                    Only users admitted by the host can join the meeting
                                </Form.Text>
                            </Form>

                            

                            <Form style={{marginTop:"35px"}}>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Only authenticated users can join meetings "}
                                    />

                                   
                                    </div>
                                ))}
                            </Form>
                                
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Video</Form.Label>
                        </Col>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="1">
                            <div >
                            <Form.Label style={{ marginBottom:"26px"}}>Host</Form.Label>
                            <Form.Label >Participant</Form.Label>
                            </div>
                        </Col>
                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                           
                                <Form >
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex", whiteSpace:"nowrap"}}>
                                    <Form.Check 
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"on"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        id={`default-${type}`}
                                        label={"off"}
                                    />
                                    </div>
                                ))}
                                </Form>
                            
                            
                                
                                <Form >
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex"}}>
                                    <Form.Check 
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"on"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        id={`default-${type}`}
                                        label={"off"}
                                    />
                                    </div>
                                ))}
                            </Form>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Audio</Form.Label>
                        </Col>
                        
                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                        <Form >
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" style={{display: "flex"}}>
                                    <Form.Check 
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Telephone"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginRight:"20px"}}
                                        type={type}
                                        
                                        id={`default-${type}`}
                                        label={"Computer Audio"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        checked
                                        id={`default-${type}`}
                                        label={"Telephone and Computer Audio"}
                                    />
                                    </div>
                                ))}
                                </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Meeting Options</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                        <Form >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3" >
                                    <Form.Check 
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Enable join before host"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        
                                        id={`default-${type}`}
                                        label={"Mute participants upon entry"}
                                    />

                                    <Form.Check // prettier-ignore
                                        type={type}
                                        style={{marginBottom:"20px"}}
                                        checked
                                        id={`default-${type}`}
                                        label={"Allow screen sharing"}
                                    />

                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        
                                        id={`default-${type}`}
                                        label={"Use Personal Meeting ID -------"}
                                    />
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                    <Form.Label style={{marginLeft:"20px"}}>One participant can share at a time</Form.Label>
                                    
                                    <Form.Label style={{marginLeft:"20px"}}>Who can share?:All Participants</Form.Label>

                                    <Form.Label style={{marginLeft:"20px"}}>Who can start sharing when someone else is sharing?:Host Only</Form.Label>

                                    </div>
                                    <Form.Check // prettier-ignore
                                        style={{marginBottom:"20px"}}
                                        type={type}
                                        
                                        id={`default-${type}`}
                                        label={"Record the meeting automatically On the local computer"}
                                    />
                                    </div>
                                ))}
                                </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{border: "1px solid #360404d5" , paddingTop:"15px"}} xs="4">
                            <Form.Label>Alternative Host</Form.Label>
                        </Col>

                        <Col style={{border: "1px solid #360404d5", paddingTop:"10px"}} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default MyZoom;