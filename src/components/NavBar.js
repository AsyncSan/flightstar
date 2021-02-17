import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "./drawer";
import FlightIcon from "@material-ui/icons/FlightTakeoff";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ba68c8" }}>
        <Toolbar>
          <div>
            <Drawer />
          </div>

          <Typography variant="h6" color="inherit" aria-label="Tophead">
            Chinese Flight Money Back
            <FlightIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
