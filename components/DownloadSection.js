import React from 'react'
import {Container ,Row , Col} from "react-bootstrap"
import styles from "../styles/Download.module.css"


function DownloadSection() {
  return (
    <div className={styles.downloadcontainerbg}>
    <Container className={styles.downloadcomponent}>
      <h3>Get Food With Foodo</h3>
      <h3>Download The App</h3>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print,
      </p>
      <Container className={styles.imgdownload}>
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          className="img-fluid"
        />
        <img
          src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1"
          className="img-fluid"
        />
      </Container>
    </Container>
  </div>
  )
}

export default DownloadSection