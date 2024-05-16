import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications</CardTitle>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert color="info">
                  <center>
                    <span>Welcome to the Brain Pals App!!!</span>
                  </center>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="danger">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <center>
                    <span data-notify="message">
                      Please complete your today's exercise
                    </span>
                  </center>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="success">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <center>
                  <span data-notify="message">
                    Congratulations on completing your exercise today
                  </span>
                  </center>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <center>
                  <span data-notify="message">
                    You have completed your first course today!! Keep Going
                  </span>
                  </center>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
