// src/Navbar.jsx
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setShowMenuIcon(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>CodingChallenge</p>
      </div>
      <div
        className={`${styles.navlinkscontainer} ${
          showMenuIcon ? styles.showMenuIcon : ""
        }`}
      >
        <Link to="/" className={styles.navlinks}>
          Home
        </Link>
        <Link to="/" className={styles.navlinks}>
          Categories
        </Link>
        <Link to="/" className={styles.navlinks}>
          News
        </Link>
        <Link to="/" className={styles.navlinks}>
          Promo
        </Link>
        <Link to="/" className={styles.navlinks}>
          Testing
        </Link>
      </div>
      {showMenuIcon && (
        <div className={styles.menuicon}>
          <MenuIcon />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
