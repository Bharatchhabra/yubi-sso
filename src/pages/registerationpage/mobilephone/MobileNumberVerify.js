import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Grid, Button, Box } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const signInSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone Number is required"),
});

const initialValues = {
  phoneNumber: "",
};

export const MobileNumberVerify = (props) => {
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
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber" className="PhonMargin">Phone number</label>
                    <PhoneInput
                      country={"us"}
                    
                      value={formik.values.phoneNumber}
          onChange={e =>formik.setFieldValue("phoneNumber", e)}
          onBlur={formik.handleBlur("phoneNumber")}
                     
                         className={
                        errors.phoneNumber && touched.phoneNumber ? "input-error" : null
                      }
                    
                    />
                     <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
              </Grid>
              
              <Box>
                <Button variant="outlined" className="resend">
                  Cancel
                </Button>
                <Button  variant="contained"
                  type="submit"
                  className="lightblue_btn">
                  Submit
                </Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
