import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.scss";
import logo from "../../../assets/images/logoYubi 1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className="navbar_bg">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              padding: "8px 0",
            }}
          >
            <img src={logo} alt="logo"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box sx={{ backgroundColor:"#000", }}>
               
                  <Button variant="outlined" className="navbar_login_btn" sx={{ display: { xs: "block", md: "none" } }}>
                    LOGIN
                  </Button>
                
                  <Button variant="contained" className="navbar_register_btn" sx={{ display: { xs: "block", md: "none" } }}>
                    REGISTER
                  </Button>
               
              </Box>
            </Menu>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                padding: "8px 0",
              }}
            >
              <img src={logo} alt="logo"/>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>

            {localStorage.getItem("admin") ? null : (

          <Link to="/">
              <Button variant="outlined" className="navbar_login_btn">
                LOGIN
              </Button>
          </Link>
            )}
            {localStorage.getItem("admin") ? null : (
                 <Link to="/register">
              <Button variant="contained" className="navbar_register_btn">
                REGISTER
              </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
