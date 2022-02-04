import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Checkbox, Link, Button, Typography, Box } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const signInSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone Number is required"),
  verify: Yup.string()
    .required("verification code is required")
});

const initialValues = {
  phoneNumber: "",
  verify: "",
};

export const VerificationForm = (props) => {
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
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <PhoneInput
                      country={"us"}
                      name="phoneNumber"
                      id="phoneNumber"
                      className="marginBottom"
                      value={initialValues.phoneNumber}
                      // onChange={(phone) => setState({ phone })}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="verify">Enter verification code</label>
                    <Field
                      type="text"
                      name="verify"
                      id="verify"
                      className={
                        errors.verify && touched.verify ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="verify"
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
                <Button  variant="contained"
                  type="submit"
                  className="lightblue_btn">
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
