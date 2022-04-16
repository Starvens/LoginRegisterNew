import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    background: "#C1E1C1 ",
    marginTop: "40px",
    marginLeft: "280px",
    width: "600px",
    height: "450px",
    border: "1px solid #707070",
    opacity: "1",
  },
  texthead: {
    letterSpacing: "0px",
    color: "#707070",
    opacity: "1",
    marginTop: "0px",
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
export const CreateNewPassword = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
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
                Enter a new password for your user@account.com account.
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
                      Create New Password<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-f"
                      name="create new password"
                      type="password"
                      label="Create New Password"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Re-enter Password<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-l"
                      name="re-enter password"
                      type="password"
                      label="Re-enter Password"
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
                        href="/"
                        onClick={home}
                        color="inherit"
                        style={{ marginLeft: "2px" }}
                      >
                        Submit
                      </Link>
                    </Button>
                  </FormControl>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
