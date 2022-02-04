import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Button, Box } from "@mui/material";
import * as Yup from "yup";
import "./user.scss";

const signInSchema = Yup.object().shape({
  businessName: Yup.string().required("Business Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  secondLast: Yup.string().required("Second Last Name is required"),
  legalHome: Yup.string().required("Required"),
  legalHomes: Yup.string().required("Required"),
});

const initialValues = {
  businessName:"",
  firstName: "",
  lastName: "",
  secondLast: "",
  legalHome:"",
  legalHomes:"",
};

export const BusinessTab = (props) => {
  const onContinueButton = (values) => {
    console.log(values);
    props.handleNext();
    console.log("submit");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onContinueButton}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <div className="container">
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="form-row">
                    <label htmlFor="businessName">Business Name</label>
                    <Field
                      type="text"
                      name="businessName"
                      id="businessName"
                      className={
                        errors.businessName && touched.businessName
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="businessName"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className={
                        errors.firstName && touched.firstName
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={
                        errors.lastName && touched.lastName
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={
                        errors.lastName && touched.lastName
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="secondLast">Second Last Name</label>
                    <Field
                      type="text"
                      name="secondLast"
                      id="secondLast"
                      className={
                        errors.secondLast && touched.secondLast
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="secondLast"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="legalHome">
                      What is the legal jurisdiction of your home?
                    </label>
                    <Field
                      type="text"
                      name="legalHome"
                      id="legalHome"
                      className={
                        errors.legalHome && touched.legalHome ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="legalHome"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="legalHomes">
                      What is the legal jurisdiction of your home?
                    </label>
                    <Field
                      type="text"
                      name="legalHomes"
                      id="legalHomes"
                      className={
                        errors.legalHomes && touched.legalHomes ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="legalHomes"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
               
              </Grid>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  className="lightblue_btn"
                >
                  Continue
                </Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
