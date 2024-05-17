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
import Bot from "./Bot";


function Dashboard() {
  const[modal,setShowMaodal]=useState(false)
  const[eyeModal,setEyeModal]=useState(false)
  const[muscleModal,setMuscleModal]=useState(false)

  const [comp,setComp]=useState('')

  const navigate=useNavigate() 
  const handleClose = () => {
    setShowMaodal(false);
  }; 

  function handleEyeClick() {
    setShowMaodal(true)
    setComp("Eyes")

  }
  function handleMuscleClick(){
    setShowMaodal(true)
    setComp("Muscles")
  }
 
  const handlePageRoute=()=>{
    console.log(comp)
    switch(comp){
      case "Eyes":
        navigate('/eye');
        break;
      case "Speech":
        navigate('/speech')
        break;
      case "Muscles":
        navigate('/speechdoc')
        break;
    }
  }

  
  function handlePageConstruction(){
   navigate('/pageUnderConstruction')
  }
  function handleSpeechClick(){
    setComp("Speech")
    setShowMaodal(true)
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
            <Card className="card-chart" style={{cursor: "pointer"}} onClick={handleMuscleClick}>
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
          <Bot></Bot>
        </Row>

        {modal && (
           <Modal show= {modal} onHide={handleClose}>     
             <Modal.Body>
               <p>Do you want to Test your {comp}</p>
             </Modal.Body>
     
             <Modal.Footer style={{display: "flex", flexDirection:"row-reverse"}}>
               <Button variant="secondary" style={{ minWidth: "10px", margin: "15px"}} onClick={handleClose}>Close</Button>
               <Button variant="info" style={{ minWidth: "10px", margin: "15px"}} onClick={handlePageRoute}>Yes</Button>
             </Modal.Footer>
         </Modal>
        )}

      </div>
        
    </>
  );
}

export default Dashboard;
