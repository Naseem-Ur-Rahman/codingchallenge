import React from "react";
import styles from "./singlefilm.module.scss";
import { Loader } from "../../index";
import { useGetFilms } from "../../../customhooks/films/useGetAllFilms";

const SingleFilm = ({ data, isloading, issuccess }) => {
  const { handleNavigate } = useGetFilms();

  if (isloading) {
    return <Loader />;
  }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.mainHeading}>Know the Single Film Here...</div>
      <div className={styles.card}>
        <div className={styles.topcontainer}>
          <div className={styles.title}>
            <h2>{data?.title}</h2>
            <h6>Eposide:{data?.episode_id}</h6>
          </div>
          <div className={styles.subinfo}>
            <h5>Producer: {data?.producer}</h5>
            <h5>Director: {data?.director}</h5>
            <h6>{data?.release_date}</h6>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.openCrawl}>
            <h5>Open Crawl:</h5>
            {data?.opening_crawl}
          </div>
          <div className={styles.characters}>
            <h5>Charcters:</h5>
            {data?.characters?.map((actor, index) => (
              <div className={styles.links}>
                <p className={styles.test}>Actor {index + 1}</p>
                <p
                  className={styles.movielink}
                  onClick={() => handleNavigate(index + 1)}
                >
                  View info{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFilm;
