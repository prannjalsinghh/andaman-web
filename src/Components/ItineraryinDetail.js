import React from "react";
import { Container, Typography } from "@mui/material";


const styles = {
  chip: {
    margin: "0px 5px",
    padding: "5px",
    color: "white",
    backgroundColor: "#019ba7",
    borderRadius: "5px",
  },
  chipValue: {
    margin: "0px 5px",
    padding: "5px",
    color: "#019ba7",
    backgroundColor: "#dddddd",
    borderRadius: "5px",
    width:'fit-content'
  },
};


const Itinerary = (props) => {
  return (
    <Container sx={{ mb: 5 }}>
      <div>
        <Typography variant="h6" style={{ ...styles.chipValue }}>
          <span style={{ ...styles.chip }}>{props.itinerary.day}</span>
          <span style={{ ...styles.chipValue }}>{props.itinerary.heading}</span>
        </Typography>
      </div>
      <div>
        <Typography variant="body1" sx={{mt:3,color:'gray',fontWeight:'bold'}}>{props.itinerary.info}</Typography>
      </div>
    </Container>
  );
};

export default Itinerary;
