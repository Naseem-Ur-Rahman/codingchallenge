import React from "react";
import styles from "./peopledata.module.scss";
import { Loader } from "../../index";
import { useGetPeople } from "../../../customhooks/people/useGetAllPeople";
const PeopleData = ({ People, isloading, issuccess }) => {
  const { handlePeopleNavigate } = useGetPeople();

  if (isloading) {
    return <Loader />;
  }
  if (issuccess) {
    return (
      <div className={styles.maincontainer}>
        <div className={styles.mainHeading}>
          Know Your Favourite Man Here...
        </div>
        <div className={styles.cardContainer}>
          {People.map((user, index) => (
            <div className={styles.userCard} key={index}>
              <h2 className={styles.username}>{user.name}</h2>
              <hr />
              <div className={styles.subinfoContainer}>
                <p>Height: {user.height} cm</p>
                <p>Mass: {user.mass} kg</p>
              </div>
              <div className={styles.subinfoContainer}>
                <p>Hair Color: {user.hairColor}</p>
                <p>Eye Color: {user.eyeColor} </p>
              </div>
              <div className={styles.subinfoContainer}>
                <p>Skin Color: {user.skinColor} </p>
                <p>DOB: {user.DOB} </p>
              </div>
              <div className={styles.subinfoContainer}>
                <p>Gender: {user.gender}</p>
                <p
                  className={styles.allInfoButton}
                  onClick={() => handlePeopleNavigate(user.id)}
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

export default PeopleData;
