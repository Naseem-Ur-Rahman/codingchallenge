import React from "react";
import { Loader } from "../../index";
import styles from "./allfilmsdata.module.scss";
import { useNavigate } from "react-router-dom";

const AllFilmsData = ({ Movies, isloading, issuccess }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/singlefilm/${id}`);
  };
  if (isloading) {
    return <Loader />;
  }
  if (issuccess) {
    return (
      <div className={styles.maincontainer}>
        <div className={styles.mainHeading}>
          Know Your Favourite Movies Here...
        </div>
        <div className={styles.cardContainer}>
          {Movies.map((movie, index) => (
            <div className={styles.userCard} key={index}>
              <h2 className={styles.username}>{movie.title}</h2>
              <hr />
              <div className={styles.subinfoContainer}>
                <p>Eposides: {movie.eposide}</p>
              </div>
              <div className={styles.subinfoContainer}>
                <p>Producer: {movie.producer}</p>
              </div>
              <div className={styles.subinfoContainer}>
                <p>Director: {movie.director}</p>
              </div>

              <div className={styles.subinfoContainer}>
                <p>Date: {movie.releaseData}</p>
                <p
                  className={styles.allInfoButton}
                  onClick={() => handleNavigate(movie.id)}
                >
                  View all info{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default AllFilmsData;
