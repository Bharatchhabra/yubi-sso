import React from "react";
import { Grid, Box, Button, } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

export const EmailForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
        props.handleNext()
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <div className="container">
            <Form>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
              <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
              <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
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
                  </div>
              </Grid>
            </Grid>
            <Box>
              <Button variant="outlined" className="resend">
                Resend
              </Button>
              <Button variant="contained" type="submit" className="lightblue_btn">
                Verify
              </Button>
            </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
