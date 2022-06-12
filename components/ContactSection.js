import React from 'react'
import {Container ,Row , Col} from "react-bootstrap"
import styles from "../styles/Contact.module.css"

function ContactSection() {
  return (
    <div className={styles.contactcontainerbg}>
    <Container className={styles.contactcomponent}>
      <Row>
        <Col xs={12} md={6}>
          <h1>FOODO</h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known.Lorem ipsum, or
            lipsum as it is sometimes known.
          </p>
          <div>
            <span className={` fa-facebook-square ${styles.fa}`}></span>
            <span className={` fa-instagram ${styles.fa}`}></span>
            <span className={` fa-linkedin-square ${styles.fa}`}></span>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <b>Links</b>
          <br />
          <br />
          <h6>Overview</h6>
          <h6>Social Media</h6>
          <h6>Contact</h6>
        </Col>
        <Col xs={12} md={3}>
          <b>Company</b>
          <br />
          <br />
          <h6>Overview</h6>
          <h6>Social Media</h6>
          <h6>Contact</h6>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default ContactSection