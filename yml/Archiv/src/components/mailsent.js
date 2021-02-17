import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomMenu from "./bottommenu";

const styles = theme => ({
  root: {
    "padding-left": "5%",

    "padding-right": "5%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  head: {
    color: "lightgray"
  },
  links: {
    color: "whitesmoke"
  }
});

function Mailsent(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <h1>
          E-Mail wurde versendet, Sie erhalten alle nötigen Informationen von
          uns
        </h1>
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
      <BottomMenu />
    </div>
  );
}

Mailsent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mailsent);
