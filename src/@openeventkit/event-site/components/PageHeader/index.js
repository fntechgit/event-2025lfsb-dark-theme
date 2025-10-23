import * as React from "react";
import PropTypes from "prop-types"

import styles from "./index.module.scss";

const PageHeader = (props) => (
  <section className={styles.pageHeader} style={ props.backgroundImageSrc && {backgroundImage: `url(${props.backgroundImageSrc})`}}>
    <div className={styles.titles}>
      <h1>{props.title}</h1>
      <h1 className={styles.subtitle}>{props.subtitle}</h1>
    </div>
  </section>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImageSrc: PropTypes.string
}

export default PageHeader;