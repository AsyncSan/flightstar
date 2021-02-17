import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    "padding-top": "5%",
    width: "100%",
    "padding-bottom": "5%",
    "background-color": "#ba68c8"
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

function BottomMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ul>
        <li>
          <h4 className={classes.head}>Unternehmen</h4>
          <ul className={classes.links}>
            <li>Über uns</li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4 className={classes.head}>Portfolio</h4>
          <ul className={classes.links}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </li>

        <li>
          <h4 className={classes.head}>Informationen</h4>
          <ul className={classes.links}>
            <li>AGB</li>
            <li>Datenschutz</li>
            <li>Impressum</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

BottomMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomMenu);
