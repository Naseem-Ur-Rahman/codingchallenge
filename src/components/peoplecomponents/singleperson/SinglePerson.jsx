import React from "react";
import styles from "./singleperson.module.scss";
import { Loader } from "../../index";
import { Link } from "react-router-dom";
import { useGetPeople } from "../../../customhooks/people/useGetAllPeople";
const SinglePerson = ({ data, isloading, issuccess }) => {
  const { handleNavigate, handleplanetNavigate } = useGetPeople();

  if (isloading) {
    return <Loader />;
  }
  if (issuccess) {
    return (
      <div className={styles.maincontainer}>
        <div className={styles.mainHeading}>Know the Single Man Here...</div>
        <div className={styles.card}>
          <div className={styles.name}>
            <h2>{data?.name}</h2>
          </div>
          <div className={styles?.generalInfo}>
            <h6>General Information</h6>
          </div>
          <div className={styles.subInfoContainer}>
            <div className={styles.subInfo}>
              <h4>Height</h4>
              <p>{data?.height}</p>
            </div>
            <div className={styles.subInfo}>
              <h4>Mass</h4>
              <p>{data?.mass}</p>
            </div>
            <div className={styles.subInfo}>
              <h4>Hair Color</h4>
              <p>{data?.hair_color}</p>
            </div>
          </div>
          <div className={styles.subInfoContainer}>
            <div className={styles.subInfo}>
              <h4>Eye Color</h4>
              <p>{data?.eye_color}</p>
            </div>
            <div className={styles.subInfo}>
              <h4>Skin Color</h4>
              <p>{data?.skin_color}</p>
            </div>
            <div className={styles.subInfo}>
              <h4>DOB</h4>
              <p>{data?.birth_year}</p>
            </div>
          </div>
          <div className={styles.subInfoContainer}>
            <div className={styles.subInfo}>
              <h4>Gender</h4>
              <p>{data?.gender}</p>
            </div>
          </div>
          <div className={styles?.generalInfo}>
            <h6>Films Information</h6>
          </div>
          <div className={styles.subInfoContainer}>
            {data?.films.map((film, index) => (
              <div
                className={styles.subInfo}
                key={index}
                onClick={() => handleNavigate(index + 1)}
              >
                <p to={film} className={styles.movieLink}>
                  Movie {index + 1}
                </p>
              </div>
            ))}
          </div>
          <div className={styles?.generalInfo}>
            <h6>House Planet Information</h6>
          </div>
          <div className={styles.subInfoContainer}>
            <div className={styles.subInfo}>
              <h4>Home</h4>
              <div className={styles.homeworld}>
                <p onClick={() => handleplanetNavigate(data?.homeworld)}>
                  View Now
                </p>
              </div>
            </div>
          </div>
          <div className={styles?.generalInfo}>
            <h6>Starships Information</h6>
          </div>
          <div className={styles.subInfoContainer}>
            {data?.starships.map((starship, index) => (
              <div className={styles.subInfo} key={index}>
                <Link to={starship} className={styles.movieLink}>
                  Starship {index + 1}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default SinglePerson;
