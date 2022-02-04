import React from "react";

import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { BusinessTab } from "./BusinessTab";
import IndividualTab from "./IndividualTab";
import {Link} from "react-router-dom"

export const UserTab = (props) => {
  const [valueTab, setValueTab] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  
  return (
    <Box sx={{ width: "92%", typography: "body1" }}>
      <TabContext value={valueTab}>
        <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
          <TabList className="tabheader" onChange={handleChange} aria-label="">
            <Tab label="Business Registration" value="1" />
            <Tab label="Individual Registration" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <BusinessTab handleNext={props.handleNext}/>  
        </TabPanel>
        <TabPanel value="2">
          <IndividualTab handleNext={props.handleNext}/>
        </TabPanel>
        <Box sx={{ textAlign: "center" }}>
         
          <Typography
            variant="subtitle2"
            className="user_footer"
            component="div"
          >
            Have Account?
            <Link to="/login">
              {" "}
              Log in
            </Link>
          </Typography>
        </Box>
      </TabContext>
    </Box>
  );
};