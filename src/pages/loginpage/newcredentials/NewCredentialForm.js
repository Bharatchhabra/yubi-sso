import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
    password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const initialValues = {
  password: "",
  confirmPassword: "",
};
export const NewCredentialForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
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
                    New Credentials
                  </Typography>
                  <Box sx={{ padding: "10px 0 20px" }}>
                    <div className="form-row">
                      <label htmlFor="password">New Password</label>
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
                    </div>
                  </Box>
                  <Box>
                    <div className="form-row">
                      <label htmlFor="password">Confirm Password</label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        style={{ border: "none" }}
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? "input-error"
                            : null
                        }
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="span"
                        className="error"
                      />
                    </div>
                  </Box>

                  <Box
                    textAlign="center"
                    sx={{ paddingBottom: "130px", paddingTop: "10px" }}
                  >
                    <Button variant="contained" className="lightblue_btn">
                      Update
                    </Button>
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
