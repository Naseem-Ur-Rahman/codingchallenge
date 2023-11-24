import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "8vh",
      }}
    >
      <CircularProgress sx={{ color: "var(--background-color)" }} />
    </div>
  );
};

export default Loader;
