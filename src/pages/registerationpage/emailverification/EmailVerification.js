import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import contactimg from "../../../assets/images/AlluraOnlineSearching.png";
import { EmailForm } from "./EmailForm";
import "./emailform.scss";

export const EmailVerification = (props) => {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ marginTop: "80px" }}>
          <img src={contactimg} className="img-fluid" alt="Contact"/>
        </Grid>
        <Grid item xs={12} md={8} sx={{paddingLeft: '40px'}}>
          <Typography varient="h4" className="heading_text">
            Email Verification
          </Typography>
          <Typography varient="p" className="contactform_p">
            We just sent a verification code to your email. Please enter the
            code below.
          </Typography>
          <EmailForm handleNext={props.handleNext}/>
        </Grid>
      </Grid>
    </Box>
  );
};
