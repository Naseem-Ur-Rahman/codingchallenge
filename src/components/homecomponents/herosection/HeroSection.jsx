// src/components/HeroSection.jsx
import React from "react";
import styles from "./herosection.module.scss";

const HeroSection = ({ Heading, SubHeading }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.heroText}>{Heading}</h1>
        <p className={styles.heroSubText}>{SubHeading}</p>
        <button className={styles.heroButton}>Explore</button>
      </div>
    </div>
  );
};

export default HeroSection;
