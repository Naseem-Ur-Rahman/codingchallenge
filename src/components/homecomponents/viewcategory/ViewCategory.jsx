// src/components/ViewCategory.jsx
import React from "react";
import styles from "./viewcategory.module.scss";
import { categoryData } from "../../../dummydata/DummyData";
import { useNavigate } from "react-router-dom";

const ViewCategory = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.heading}>Our Trending Categories</div>
        <div className={styles.categoryContainer}>
          {categoryData.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => navigate(item.to)}
            >
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCategory;
