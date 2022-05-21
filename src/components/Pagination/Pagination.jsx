import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { PersonelCards } from "../Cards/Cards";

export const SliceData = (current, length, data) => {
  // Params {Current = Page Aktif Saat ini},
  // {length = Banyak Data yang ingin ditampikan},
  // {Data data dalam array}
  const indexOfLastItem = current * length;
  const indexOfFirstItem = indexOfLastItem - length;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  return currentItems;
};

export const Pagination = ({ data, current, itemCount }) => {
  // Pagination Settings
  const [currentPage, setCurrentPage] = useState(current);

  // Initial Page Number
  const pages = [];
  for (let i = 1; i < Math.ceil(data.length / itemCount); i++) {
    pages.push(i);
  }

  //   Function untuk Next Page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  //   Function untuk Next Page
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {data && (
        <Row>
          {SliceData(currentPage, itemCount, data).map((data, i) => {
            return (
              <Col key={i} md={3} xs={12}>
                <PersonelCards
                  id={data.id.value && data.id.name + "-" + data.id.value}
                  image={data.picture.large}
                  name={data.name.first + " " + data.name.last}
                  phone={data.phone}
                  birthdate={new Date(data.dob.date).toDateString()}
                  email={data.email}
                />
              </Col>
            );
          })}
        </Row>
      )}
      <Container className="d-flex justify-content-center mt-2">
        <button
          // Disable Button ketika page berada di indeks ke 0
          className="pagination-button"
          disabled={currentPage === pages[0] ? true : false}
          onClick={prevPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
        </button>
        <button
          // Disable Button ketika page berada di index maksimal
          className="pagination-button"
          disabled={currentPage === pages[pages.length - 1]}
          onClick={nextPage}
        >
          Next Page <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Container>
    </div>
  );
};
