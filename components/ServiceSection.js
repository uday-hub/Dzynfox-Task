import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import styles from "../styles/Service.module.css";

function ServiceSection() {
  return (
    <div className={styles.servicecontainerbg}>
    <Container className={styles.servicecontainer}>
      <Row>
        <Col xs={12} md={4}>
          <img src="assets/image-one.png" className={`img-fluid ${styles.serviceimg}`} />
          <h2>Best Offer In Town</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text
            used.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <img src="assets/image-two.png" className={`img-fluid ${styles.serviceimg}`} />
          <h2>Fast Delivery</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text
            used.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <img
            src="assets/image-three.png"
            className={`img-fluid ${styles.serviceimg}`}
          />
          <h2>Quality Food</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text
            used.
          </p>
        </Col>
      </Row>
      <hr />
    </Container>
  </div>
  )
}

export default ServiceSection