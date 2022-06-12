import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from "../styles/About.module.css";

function AboutSection() {
  return (
    <div className={styles.aboutcontainerbg}>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <img src="assets/image-about.png" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className={styles.aboutdetails}>
          <div className='pt-2 pb-4'>
            <h2>Best Offer In Town</h2>
            <b>Lorem ipsum, or lipsum as it is sometimes known,</b>
            <br />
            <br />
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum
              et Malorum for use in a type specimen book.
            </p>
            <button className={`btn ${styles.btncustom}`}>Explore More</button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default AboutSection