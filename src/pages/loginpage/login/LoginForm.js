import React from "react";
import "./login.scss";
import {
  Box,
  Grid,
  Typography,
  Button,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,

  Checkbox,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, } = formik;
        return (
          <div>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              className="login_form"
            >
              <Grid item xs={12} md={7}>
                <Form>
                  <Typography
                    varient="h4"
                    className="heading_text"
                    sx={{ paddingBottom: "26px" }}
                  >
                    Login
                  </Typography>
                  <Box sx={{ padding: "10px 0 20px" }}>
                    <div className="form-row">
                      <label htmlFor="email">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        style={{ border: "none", }}
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      {}
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </div>
                  </Box>
                  <Box>
                    <div className="form-row">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        style={{ border: "none" }}
                        className={
                          errors.password && touched.password
                            ? "input-error"
                            : null
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                      <Typography varient="body2" sx={{ color: "#6A6A6A" }}>
                        Your password must be at least one uppercase, one
                        special character and one number..
                      </Typography>
                    </div>
                  </Box>

                  <List>
                    <ListItem
                      sx={{ padding: "0px" }}
                      secondaryAction={
                        <Link to="/reset">
                        <Typography
                          edge="end"
                          sx={{ color: "#1C2038", fontSize: "20px" }}
                        >
                          Forgot Password?
                        </Typography>
                        </Link>
                      }
                    >
                      <ListItemAvatar>
                        <Checkbox sx={{ padding: "0px" }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Remember me"
                        sx={{ color: "#A7A0A0" }}
                      />
                    </ListItem>
                  </List>

                  <Box textAlign="center" sx={{ paddingBottom: "130px", paddingTop: "10px" }}>
                    <Button variant="contained" type='submit' className="lightblue_btn">
                      Login
                    </Button>
                    <Typography
                      variant="subtitle2"
                      className="user_footer"
                      component="div"
                    >
                      No Account?
                      <Link to="/register"> Sign up</Link>
                    </Typography>
                  </Box>
                </Form>
              </Grid>
            </Grid>
          </div>
        );
      }}
    </Formik>
  );
};
