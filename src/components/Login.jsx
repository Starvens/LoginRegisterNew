import React from "react";

import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Too 'Password should be of minimum 6 characters length'!")
    .max(10, "Too Long!")
    .required("Password is required"),
 
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    background: "#C1E1C1 ",
    marginTop: "60px",
    marginLeft: "50px",
    width: "400px",
    height: "450px",
    border: "1px solid #707070",
    opacity: "1",
  },
  texthead: {
    letterSpacing: "0px",
    justifyContent: "center",
    color: "#707070",
    opacity: "1",
    marginTop: "5px",
  },
  form: {
    width: "100%",
  },
  text: {
    marginTop: "5px",
    color: "#707070",
    textAlign: "Left",
  },
  textfield: {
    color: "#707070",
    textAlign: "Left",
  },

  link: {
    marginTop: "15px",
  },
  guest: {
    marginTop: "40%",
    fontWeight: "bold",
    fontSize: "30px",
    fontFamily: "Lucida Sans",
    color: "#707070",
  },
  guestlink: {
    color: "#707070",
    fontSize: "40px",
  },
  color: {
    color: "#707070",
  },
}));

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:  SignupSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:4000/auth/login", values)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const forgotpassword = () => {
    navigate("/forgotpassword");
  };
  const home = () => {
    navigate("/");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Box sx={{ justifyContent: "center", display: "flex" }}>
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
                    style={{
                      fontWeight: "bold",
                      marginLeft: "0rem",
                      textAlign: "space-between",
                      width: "143px",
                      fontSize: "8px",
                      fontFamily: "Maiandra GD",
                    }}
                  >
                    one place to all
                  </Typography>
                </Box>
              </Box>
              <h3 className={classes.texthead}>Welcome</h3>

              <form onSubmit={formik.handleSubmit} className={classes.form}>
                <h3 className={classes.text}>Email</h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                />
                <h3 className={classes.text}>Password</h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  variant="outlined"
                />

                <Button variant="contained" style={{ marginTop: "15px" }} type="submit">
                  Sign In
                </Button>
              </form>

              {/* // <Box className={classes.button}>
              //   <Button variant="contained">Sign In</Button>
              // </Box> */}
              <Box className={classes.link}>
                <Link
                  href="/forgotpassword"
                  onClick={forgotpassword}
                  color="inherit"
                >
                  Forgot Your Password?
                </Link>
              </Box>
              <Box className={classes.color}>
                <h3>
                  Don't have a Starvens account?
                  <Link href="/register" onClick={register} color="inherit">
                    SignUp Now
                  </Link>
                </h3>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h1 className={classes.guest}>Continue as</h1>
              <Link
                href="/"
                onClick={home}
                color="inherit"
                className={classes.guestlink}
              >
                Guest
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
