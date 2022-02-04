import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import contactimg from "../../../assets/images/AlluraOnlineSearching.png";
import { Contactform } from "./Contactform";
import "./contactform.scss";

export const ContactInformation = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ marginTop: "80px" }}>
          <img src={contactimg} className="img-fluid" alt="Contact"/>
        </Grid>
        <Grid item xs={12} md={8} sx={{ paddingLeft: "20px" }}>
          <Typography varient="h4" className="heading_text">
            Contact Information
          </Typography>
          <Typography varient="p" className="contactform_p">
            Please share your contact information and establish your account
            credentials.
          </Typography>
          <Contactform handleNext={props.handleNext}/>


        </Grid>
      </Grid>
    </Box>
  );
};
