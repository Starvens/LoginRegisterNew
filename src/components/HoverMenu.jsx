import React from "react";
import { Box } from "@mui/material";

const HoverMenu = (props) => {
  const items = props.options.map((x) => <div key={x}>{x}</div>);
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        top: '9px',
        flexDirection: "column",
        margin: 0,
        padding: '1rem',
        // borderRadius: '1rem',
        borderRadius: '10% 30% 50% 70%',
        zIndex: '7',
        // boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
        // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
      }}
    >
      {items}
    </Box>
  );
};

export default HoverMenu;
