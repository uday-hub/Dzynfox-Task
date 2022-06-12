import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../styles/Top.module.css";

function TopSection() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containertop}>
          <Row className={styles.sectiontop}>
            <Col xs={12} md={6} className={styles.sectiontopleft}>
              <img className="img-fluid" src="/assets/mobile.png" />
            </Col>
            <Col xs={12} md={6} className={`shadow ${styles.sectiontopright}`}>
              <div className={styles.plateimgcontainer}>
                {/* <img
                  className="plate-img img-fluid"
                  src="/assets/plate-two.png"
                />
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-three.png"
                /> */}
              </div>
              <h6>FOODO</h6>
              <h2>Get Your Food In</h2>
              <h1>FOODO</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button className={`btn ${styles.btncustom}`}>Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopSection;
