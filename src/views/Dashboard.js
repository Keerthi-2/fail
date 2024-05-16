import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import ChatbotComponent from "./ChatBot";


function Dashboard() {
  const[modal,setShowMaodal]=useState(false)
  const [fullscreen, setFullScreen]=useState(true)
  const navigate=useNavigate()  

  function handleEyeClick() {
    navigate('/eye')
  }
  function handlePageConstruction(){
   navigate('/pageUnderConstruction')
  }

  function handleSpeechClick(){
    navigate('/speech')
    // console.log("Hii")
    // setShowMaodal(true)
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    {/* <h5 className="card-category">Total Shipments</h5> */}
                    <CardTitle tag="h2">Cerebral Placium</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              Cerebral palsy is an umbrella term that refers to a group of disorders affecting a person’s ability to move. In most cases, it is caused by an injury to the developing brain either during pregnancy or shortly after birth. It is a permanent life-long condition, but generally does not worsen over time.
              Cerebral meaning ‘of the brain’ and palsy referring to ‘a lack of muscle control’ affects body movement, muscle control, muscle coordination, muscle tone, reflex, posture and balance. People who have cerebral palsy may also have visual, learning, hearing, speech, epilepsy and intellectual impairments.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart" style={{cursor: "pointer"}} onClick={handleEyeClick}>
              <CardHeader>
                <CardTitle tag="h3">
                  Eyes
                </CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart" style={{cursor: "pointer"}} onClick={handleSpeechClick}>
              <CardHeader>
                <CardTitle tag="h3">
                  Speech
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart" style={{cursor: "pointer"}} onClick={handlePageConstruction}>
              <CardHeader>
                <CardTitle tag="h3">
                  Muscles
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <ChatbotComponent></ChatbotComponent>
        </Row>
      </div>
      {modal && (
           <div
           className="modal show"
           style={{ display: 'block', position: 'initial' }}
         >
           <Modal.Dialog>
             <Modal.Header closeButton>
               <Modal.Title>Modal title</Modal.Title>
             </Modal.Header>
     
             <Modal.Body>
               <p>Modal body text goes here.</p>
             </Modal.Body>
     
             <Modal.Footer>
               <Button variant="secondary">Close</Button>
               <Button variant="primary">Save changes</Button>
             </Modal.Footer>
           </Modal.Dialog>
         </div>
        )}
        
    </>
  );
}

export default Dashboard;
