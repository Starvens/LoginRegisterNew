import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { NavBar } from "./NavBar";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";

import { useNavigate } from "react-router-dom";

const ForgotPasswordSchema = Yup.object().shape({
  securityOne: Yup.string().required(),
  securityTwo: Yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  texthead: {
    letterSpacing: "0px",
    color: "#707070",
    opacity: "1",
    marginTop: "200px",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  text: {
    marginTop: "7px",
    color: "#707070",
    textAlign: "Left",
  },
}));
export const TearmsAndConditions = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const createnewpassword = () => {
    navigate("/createnewpassword");
  };

  return (
    <div className={classes.root}>
      <NavBar></NavBar>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            
              <Box sx={{ marginLeft: "12rem", display: "flex" }}>
                <Box>
                  <img src="/Starvens_Logo.png" width="38" height="50"></img>
                </Box>
                <Box sx={{ padding: 0, margin: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "0rem",
                      fontSize: "20px",
                      fontFamily: "Playfair Display",
                    }}
                  >
                    STARVENS
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "0rem",
                      textAlign: "space-around",
                      width: "143px",
                      fontSize: "8px",
                      fontFamily: "Maiandra GD",
                    }}
                  >
                    one place to all
                  </Typography>
                </Box>
              </Box>
              <h1 className={classes.text}>Forgot Your Password?</h1>
              <h4 className={classes.text}>
                Please answer the following questions to create a new password.
              </h4>
              <Formik
                initialValues={{
                  securityOne: "",
                  securityTwo: "",
                }}
                validationSchema={ForgotPasswordSchema}
                //validationSchema={() => {}}
                onSubmit={(values) => {
                  axios
                    .post("http://localhost:4000/auth/register", values)
                    .then((res) => {
                      console.log(res.status);
                      if (res.status === 200) {
                        navigate("/login");
                      }
                    })
                    .catch((err) => {});
                  alert("onsubmit");
                }}
              >
                {({ errors, touched, handleChange }) => (
                  <FormControl className={classes.form}>
                    <h3 className={classes.text}>
                      Security Question 1?<spam>*</spam>
                    </h3>
                    <Select
                      native
                      label="Starvens"
                      inputProps={{
                        name: "securityOne",
                        id: "outlined-age-native-simple2",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>
                        What primary school did you attend?
                      </option>
                      <option value={20}>
                        In what town or city was your first full-time job?
                      </option>
                      <option value={30}>
                        In what town or city did you meet your spouse or
                        partner?
                      </option>
                      <option value={40}>
                        In what town or city did your parents meet?
                      </option>
                      <option value={50}>What is your favorite movie?</option>
                    </Select>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-st1"
                      name="securityOne"
                      type="text"
                      label="Security Question One"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Security Question 2?<spam>*</spam>
                    </h3>
                    <Select
                      native
                      label="Starvens"
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple3",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>
                        What was your favorite school teacher name?
                      </option>
                      <option value={20}>What city where your born in?</option>
                      <option value={30}>
                        In what town or city did you meet your spouse or
                        partner?
                      </option>
                      <option value={40}>What was your first car?</option>
                      <option value={50}>
                        What is the name of your favorite childhood friend?
                      </option>
                    </Select>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-st2"
                      name="securityTwo"
                      type="text"
                      label="Security Question Two"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}

                    <Button
                      variant="contained"
                      type="submit"
                      style={{ marginTop: "15px" }}
                    >
                      <Link
                        href="/createnewpassword"
                        onClick={createnewpassword}
                        color="inherit"
                        style={{ marginLeft: "2px" }}
                      >
                        Submit
                      </Link>
                    </Button>
                  </FormControl>
                )}
              </Formik>
           
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
