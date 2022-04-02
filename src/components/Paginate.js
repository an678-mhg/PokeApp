import React from "react";
import { Button } from "@mui/material";

const Paginate = ({ offset, count, handlePrevious, handleNext }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <Button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </Button>
      <Button onClick={handleNext} disabled={offset >= count}>
        Next
      </Button>
    </div>
  );
};

export default Paginate;
