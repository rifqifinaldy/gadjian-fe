import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { getPersonel } from "../../actions/personelAction";

const Personel = () => {
  // Ambil State dari Reducers
  const { getPersonelResult, getPersonelLoading, getPersonelError } =
    useSelector((state) => state.personelReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get Personel List
    dispatch(getPersonel());
  }, [dispatch]);
  console.log(getPersonelResult);
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
                style={{
                  backgroundColor: "#41c0b1",
                  color: "#fff",
                  border: "none",
                }}
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
          <Row>
            {getPersonelResult ? (getPersonelResult.results.map((personel, i) => {
              return (
                <Col md={3} key={i}>
                  <Card>
                    <CardTitle>
                      <span className="text-secondary fw-bold">Personel Id : </span> {personel.id.value && personel.id.name + "-" + personel.id.value}
                    </CardTitle>
                    <CardImg
                      alt="Card image cap"
                      src={personel.picture.large}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardText className="mt-0 mb-0"> <span className="text-secondary fw-bold"> Name : </span> {personel.name.first+ " " + personel.name.last}</CardText>
                      <CardText className="mt-0 mb-0"> <span className="text-secondary fw-bold"> Telephone : </span> {personel.phone}</CardText>
                      <CardText className="mt-0 mb-0"> <span className="text-secondary fw-bold"> Birthdate : </span> {new Date(personel.dob.date).toDateString()}</CardText>
                      <CardText className="mt-0 mb-0"> <span className="text-secondary fw-bold"> Email : </span> {personel.email}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })) : null}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Personel;
