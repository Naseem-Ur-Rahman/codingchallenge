import React from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../index";
import styles from "./planetdata.module.scss";
const PlanetData = ({ Planets, isloading, issuccess }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/planet/${id}`);
  };

  if (isloading) {
    return <Loader />;
  }
  return (
    <div className={styles.maincontainer}>
      <div className={styles.mainHeading}>
        Know Your Favourite Planet Here...
      </div>
      <div className={styles.cardContainer}>
        {Planets.map((planet, index) => (
          <div className={styles.userCard} key={index}>
            <h2 className={styles.username}>{planet.name}</h2>
            <hr />
            <div className={styles.subinfoContainer}>
              <p>Rotation: {planet.rotation} </p>
              <p>Orbital: {planet.orbitalPeriod}</p>
            </div>
            <div className={styles.subinfoContainer}>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain} </p>
            </div>
            <div className={styles.subinfoContainer}>
              <p>Diameter: {planet.diameter} </p>
              <p>Surface Water: {planet.surfaceWater} </p>
            </div>
            <div className={styles.subinfoContainer}>
              <p
                className={styles.allInfoButton}
                onClick={() => handleNavigate(planet.id)}
              >
                View all info{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetData;
