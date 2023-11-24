import React from "react";
import styles from "./singleplanet.module.scss";
import { Loader } from "../../index";
import { useGetPlanets } from "../../../customhooks/planets/useGetAllPlanets";
const SinglePlanet = ({ data, isloading, issuccess }) => {
  const { handleNavigate } = useGetPlanets();

  if (isloading) {
    return <Loader />;
  }

  if (issuccess) {
    return (
      <div className={styles.maincontainer}>
        <div className={styles.mainHeading}>Know the Single Planet Here...</div>
        <div className={styles.card}>
          <div className={styles.topcontainer}>
            <div className={styles.title}>
              <h2>{data?.name}</h2>
              <h6>Population: {data?.population}</h6>
            </div>
            <div className={styles.subinfo}>
              <h5>Terrain: {data?.terrain}</h5>
              <h5>Orbital Speed: {data?.orbital_period}</h5>
              <h5>Diameter: {data?.diameter}</h5>
              <h5>Gravity: {data?.gravity}</h5>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.people}>
              <h5>All Redisents</h5>
              {data?.residents.map((resident, index) => (
                <div className={styles.subInfo} key={index}>
                  <p>Actor</p>

                  <p
                    className={styles.movielink}
                    onClick={() => handleNavigate(resident)}
                  >
                    View info
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SinglePlanet;
