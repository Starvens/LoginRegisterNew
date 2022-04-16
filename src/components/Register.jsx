import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import { useNavigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  firstName: Yup.string("Enter your firstName").required(
    "FirstName is required"
  ),
  lastName: Yup.string("Enter your lastName").required("LastName is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Too 'Password should be of minimum 6 characters length'!")
    .max(10, "Too Long!")
    .required("Password is required"),
  birthday: Yup.date("Enter your birthday").required("Birthday is required"),
  phoneNumber: Yup.number("Enter your PhoneNumber").required(
    "PhoneNumber is required"
  ),
  zipCode: Yup.number("Enter your ZipCode").required("ZipCode is required"),
  securityOne: Yup.string().required(),
  securityTwo: Yup.string().required(),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
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
    height: "1700px",
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
    color: "#707070",
    textAlign: "Left",
  },
  textfield: {
    color: "#707070",
    textAlign: "Left",
    width: "100%",
  },
  securitytextfield:{
    marginTop: "10px",
  },
  top: {
    marginTop: "10px",
  },
  select: {
    width: "100%",
  },
  checkbox: {
    justifyContent: "flex-start",
  },

  button: {
    marginTop: "20px",
    color: "#707070",
  },

  link: {
    marginTop: "15px",
  },
  guestlink: {
    marginLeft: "3px",
  },
}));
export const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      phoneNumber: "",
      zipCode: "",
      securityOne: "",
      securityTwo: "",
      terms: true,
    },
    validationSchema: SignupSchema,
    //validationSchema={() => {}}
    onSubmit: (values) => {
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
    },
  });

  const [value, setValue] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    navigate("/login");
  };

  const tearmsandconditions = () => {
    navigate("/tearmsandconditions");
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
              <form onSubmit={formik.handleSubmit} className={classes.form}>
                <h3 className={classes.text}>
                  First Name<span>*</span>
                </h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="FirstName"
                  type="string"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  Last Name<span>*</span>
                </h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="LastName"
                  type="string"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  Email<span>*</span>
                </h3>
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
                <Button
                  style={{
                    justifyContent: "center",
                    marginTop: "28px",
                    width: "100%",
                  }}
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  verify
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title" color="inherit">
                    Enter your OTP
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="OTP"
                      type="number"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Resend OTP
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>

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

                <h3 className={classes.text}>Birthday</h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="birthday"
                  name="birthday"
                  type="Date"
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.birthday && Boolean(formik.errors.birthday)
                  }
                  helperText={formik.touched.birthday && formik.errors.birthday}
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  Phone Number<span>*</span>
                </h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="PhoneNumber"
                  type="string"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  Postal/Zip Code<span>*</span>
                </h3>
                <TextField
                  className={classes.textfield}
                  fullWidth
                  id="zipCode"
                  name="zipCode"
                  label="ZipCode"
                  type="number"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.zipCode && Boolean(formik.errors.zipCode)
                  }
                  helperText={formik.touched.zipCode && formik.errors.zipCode}
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  How did you hear about Starvens?
                </h3>
                <Select
                  native
                  label="Starvens1"
                  inputProps={{
                    name: "starvens",
                    id: "outlined-age-native-simple1",
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Facebook</option>
                  <option value={20}>Google</option>
                  <option value={30}>Internet</option>
                  <option value={40}>Other</option>
                </Select>
                <h3 className={classes.text}>
                  Security Question One?<spam>*</spam>
                </h3>
                <Select
                  native
                  label="Starvens2"
                  inputProps={{
                    name: "securityOneQ1",
                    id: "outlined-age-native-simple2",
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>
                    What primary school did you attend?
                  </option>
                  <option value={20}>
                    In what town or city was your first full-time job?
                  </option>
                  <option value={30}>
                    In what town or city did you meet your spouse or partner?
                  </option>
                  <option value={40}>
                    In what town or city did your parents meet?
                  </option>
                  <option value={50}>What is your favorite movie?</option>
                </Select>
                <TextField
                  className={classes.securitytextfield}
                  fullWidth
                  id="securityOne"
                  name="securityOne"
                  label="SecurityOne"
                  type="string"
                  value={formik.values.securityOne}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.securityOne &&
                    Boolean(formik.errors.securityOne)
                  }
                  helperText={
                    formik.touched.securityOne && formik.errors.securityOne
                  }
                  variant="outlined"
                />

                <h3 className={classes.text}>
                  Security Question Two?<spam>*</spam>
                </h3>
                <Select
                  native
                  label="Starvens3"
                  inputProps={{
                    name: "securityTwoQ2",
                    id: "outlined-age-native-simple3",
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>
                    What was your favorite school teacher name?
                  </option>
                  <option value={20}>What city where your born in?</option>
                  <option value={30}>
                    In what town or city did you meet your spouse or partner?
                  </option>
                  <option value={40}>What was your first car?</option>
                  <option value={50}>
                    What is the name of your favorite childhood friend?
                  </option>
                </Select>
                <TextField
                  className={classes.securitytextfield}
                  fullWidth
                  id="securityTwo"
                  name="securityTwo"
                  label="SecurityTwo"
                  type="string"
                  value={formik.values.securityTwo}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.securityTwo &&
                    Boolean(formik.errors.securityTwo)
                  }
                  helperText={
                    formik.touched.securityTwo && formik.errors.securityTwo
                  }
                  variant="outlined"
                />
                <div>
                  <Checkbox
                    id="terms"
                    name="terms"
                    type="checkbox"
                    color="primary"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    error={formik.touched.terms && Boolean(formik.errors.terms)}
                    helperText={formik.touched.terms && formik.errors.terms}
                    variant="outlined"
                  />
                  
                  I agree with the Starvens
                  <Link
                    href="/tearmsandconditions"
                    onClick={tearmsandconditions}
                    color="inherit"
                    style={{ marginLeft: "2px" }}
                  >
                   Terms And Privacy Policys
                  </Link> 
                </div>
                <Button variant="contained" type="submit">
                  Sign Up
                </Button>
              </form>

              <Box className={classes.color}>
                <h3>
                  Already have a Starvens account?
                  <Link
                    href="/login"
                    onClick={login}
                    color="inherit"
                    style={{ marginLeft: "2px" }}
                  >
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
