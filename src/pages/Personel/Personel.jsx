import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";

const Personel = () => {
  return (
    <Container fluid>
      
      {/* Personel Header */}
      <Card outline={false} className="mb-2">
        <CardBody>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <CardTitle className="text-custom-primary" tag="h2">
                Personel List
              </CardTitle>
              <CardSubtitle className="text-secondary" tag="h6">
                List of all Personel
              </CardSubtitle>
            </Col>
            <Col md={4}>
              <InputGroup className="me-2">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
                <Input placeholder="Find Personel" type="text" />
              </InputGroup>
            </Col>
            <Col md={2}>
              <Button
                style={{ backgroundColor: "#41c0b1", color: "#fff", border: "none" }}
                color="info"
              >
                <FontAwesomeIcon icon={faPlus} /> Add Personel
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* Personel Content */}
      <Card>
        <CardBody>

        </CardBody>
      </Card>
    </Container>
  );
};

export default Personel;
