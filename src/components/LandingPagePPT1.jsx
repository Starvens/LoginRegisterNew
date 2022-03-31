import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typewriter from "typewriter-effect";

const LandingPagePPT1 = () => {
  return (
    <Box sx={{ marginLeft: "16rem", marginTop: "8rem" }}>
      <Typography
        sx={{
          fontSize: "71px",
          color: "#355E3B",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        }}
      >
        Helping you make
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            marginLeft: "5rem",
            fontSize: "71px",
            color: "#355E3B",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          more
        </Typography>
        <Typography
          sx={{
            marginLeft: "1rem",
            fontSize: "71px",
            color: "#355E3B",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          <Typewriter
          options={{loop: true}}
            onInit={(typeWriter) => {
              typeWriter
                .typeString("SUCCESSFULL.")
                .pauseFor(250)
                .deleteAll()
                .typeString("PRODUCTIVE.")
                .pauseFor(250)
                .deleteAll()
                .typeString("CONVENIENT.")
                .start();
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPagePPT1;
