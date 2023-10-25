import "./zoomPat.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyZoomPat()
{

    
    return(
    
        <div style={{ width: "90%" }}>
            <div className="container-header">
                <h1 className="title-pacientes">Zoom</h1>

            </div>
            <div className="container-controls">
            <Container fluid="md" >
                    <Row>
                        <Col style={{ display:"flex", alignItems:"flex-end", padding:"10px", background:"rgb(190 179 179 / 46%)"}} xs="4">
                            <Form.Label>Hora de Inicio</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-end",padding:"10px",background:"rgb(190 179 179 / 46%)"}} >
                            <Form.Label>Tema</Form.Label>
                        </Col>

                        <Col style={{display:"flex", alignItems:"flex-end",padding:"10px",background:"rgb(190 179 179 / 46%)"}} >
                            <Form.Label>ID de la reunion</Form.Label>
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
                    
                </Container>
            </div>
        </div>
    )
}

export default MyZoomPat;