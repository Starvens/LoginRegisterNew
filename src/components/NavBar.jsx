import React, { useState } from "react";
import { AppBar, Box, OutlinedInput, Toolbar, Typography } from "@mui/material";
import HoverMenu from "./HoverMenu";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const x = ["first", "second"];
  const navigate = useNavigate();
  const menuOptions = {
    products: ["Text to Audio", "Audio To Text"],
    company: ["About", "Contact"],
    signin: ["Signin", "Create Account"],
  };
  const [navMenu, setNavMenu] = useState({
    products: false,
    company: false,
    signin: false,
  });

  const login = () => {
    navigate("/login");
  };
  return (
    <Box sx={{}}>
      <AppBar
        position="fixed"
        sx={{
          height: "4rem",
          justifyContent: "center",
          // background: "transparent",
          background: "#C1E1C1",
          // background: '#C1E1C1CC 0% 0% no-repeat padding-box;',
          // background: '#F8F8F8',
          // marginTop: 3,
          padding: 2,
          color: "#355E3B",
          // elevation: "6",
          fontFamily: "Lucida Sans",
          boxShadow: "0px 0px 0px 0px",
          border: "none",
          outline: "none",
        }}
      >
        <Toolbar sx={{ border: "none", outline: "none" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "4rem", display: "flex" }}>
              <Box>
                <img src="/Starvens_Logo.png" width="38" height="50"></img>
              </Box>
              <Box sx={{ padding: 0, margin: 0 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontSize: "28px",
                    fontFamily: "Playfair Display",
                  }}
                >
                  STARVENS
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    textAlign: "justify",
                    width: "143px",
                    fontSize: "8px",
                    fontFamily: "Maiandra GD",
                  }}
                >
                  one place to all
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginLeft: "3rem" }}>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, products: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, products: false })}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Products
                {navMenu.products ? (
                  <HoverMenu options={menuOptions.products}></HoverMenu>
                ) : null}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Why Starvens
              </Typography>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, company: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, company: false })}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Company
                {navMenu.company ? (
                  <HoverMenu options={menuOptions.products}></HoverMenu>
                ) : null}
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "5rem" }}>
              <OutlinedInput
                notched="true"
                placeholder="Search..."
                sx={{
                  "& input": { padding: "4.5px 14px" },
                  borderRadius: "3rem",
                  borderColor: "#707070",
                  background: "#f8f8f8",
                }}
              />
            </Box>
            <Box sx={{ marginLeft: "2rem" }}>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, signin: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, signin: false })}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
                onClick={login}
               
              >
                Sign in
                
               
                {navMenu.signin ? (
                  <HoverMenu options={menuOptions.products}></HoverMenu>
                ) : null}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
