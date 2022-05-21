import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";

export const PersonelCards = ({ id, image, name, phone, birthdate, email }) => {
  return (
    <Card>
      <small className="text-center">
        <span className="text-secondary fw-bold">Personel Id : </span> {id}
      </small>
      <CardImg alt="Card image cap" src={image} top width="100%" />
      <CardBody>
        <small className="d-block mt-0 mb-0">
          {" "}
          <span className="text-secondary fw-bold"> Name : </span> {name}
        </small>
        <small className="d-block mt-0 mb-0">
          {" "}
          <span className="text-secondary fw-bold"> Telephone : </span> {phone}
        </small>
        <small className="d-block mt-0 mb-0">
          {" "}
          <span className="text-secondary fw-bold"> Birthdate : </span>{" "}
          {birthdate}
        </small>
        <small className="d-block mt-0 mb-0">
          {" "}
          <span className="text-secondary fw-bold"> Email : </span> {email}
        </small>
      </CardBody>
    </Card>
  );
};
