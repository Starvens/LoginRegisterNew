import React from "react";
 import { Formik, Form, Field } from "formik";
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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";

import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(2, "Too short!")
    .max(15, "Too long!")
    .required("Required"),
  phonenumber: Yup.number().required("Required"), 
  pincode: Yup.number().required("Required"),
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
    height: "900px",
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
  textfield: {
    marginTop: "0px",
    color: "#707070",
    textAlign: "Left",
  },
  button: {
    marginTop: "20px",
    color: "#707070",
  },

  link: {
    marginTop: "15px",
  },
  guestlink :{
    marginLeft: "3px",
  }
}));
export const Register = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  

  const login = () => {
    navigate("/login");
  };

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
              <h3 className={classes.texthead}>Welcome</h3>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  phonenumber: "",
                  pincode: ","
                }}
                // validationSchema={SignupSchema}
                validationSchema={() => {}}
                onSubmit={(values) => {
                  // axios
                  //   .post("http://localhost:4000/auth/register", values)
                  //   .then((res) => {
                  //     console.log(res.status);
                  //     if (res.status === 200) {
                  //       navigate("/login");
                  //     }
                  //   })
                  //   .catch((err) => {});
                  alert('onsubmit')
                }}
              >
                {({ errors, touched }) => (
                  <FormControl className={classes.form}>
                    <h3 className={classes.text}>
                      First Name<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-f"
                      name="firstname"
                      type="text"
                      label="First Name"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Last Name<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-l"
                      name="lastname"
                      type="text"
                      label="Last Name"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Email<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-e"
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>Password</h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-p"
                      name="password"
                      type="password"
                      label="password"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Phone Number<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-p"
                      name="phonenumber"
                      type="number"
                      label="Phone Number"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <h3 className={classes.text}>
                      Postal/Zip Code<span>*</span>
                    </h3>
                    <TextField
                      className={classes.textfield}
                      id="outlined-basic-p"
                      name="pincode"
                      type="number"
                      label="Postal/Zip Code"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    {/* <h3 className={classes.text}>
                      How did you hear about Starvens?
                    </h3>
                    <Select
                      native
                      label="Starvens"
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Facebook</option>
                      <option value={20}>Google</option>
                      <option value={30}>Internet</option>
                      <option value={40}>Other</option>
                    </Select>
                    */}
                    <Button variant="contained" type="submit" style = {{marginTop : "15px"}}>
                      Sign Up
                    </Button>
                  </FormControl>

                  /* <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="I agree with the Starvens terms and privacy policys"
              /> */

                  // <div className={classes.button}>
                  //   <Button variant="contained" type="submit">Sign Up</Button>
                  // </div>
                )}
              </Formik>

              <Box className={classes.color}>
                <h3>
                  Already have a Starvens account?
                  <Link href="/login" onClick={login} color="inherit" style={{marginLeft: "2px"}}>
                    SignIn Now
                  </Link>
                </h3>
                <h3 className={classes.guest}>
                  Continue as
                  <Link
                    href="/"
                    onClick={home}
                    color="inherit"
                    className={classes.guestlink}
                  >
                    Guest
                  </Link>
                </h3>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
