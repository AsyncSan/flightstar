import React from "react";
import Flip from "react-reveal/Flip";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  number: {
    color: "red"
  },
  numDiv: {
    width: "100%",
    "text-align": "center",
    "margin-bottom": "2%",
    "padding-bottom": "2%"
  },
  row: {
    display: "inline-block",
    "padding-right": "2%"
  }
});

class NumberCrunch extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.numDiv}>
        <div className={classes.row}>
          <h5>Allein in Europa jeden Tag mehr als</h5>
          <Flip left cascade>
            <h4 className={classes.number}>50.000</h4>
          </Flip>
          <h4>Flüge verspätet</h4>
        </div>
        <div className={classes.row}>
          <h4>Geld gibt es schon ab</h4>
          <Flip left cascade>
            <h4 className={classes.number}>2 Stunden</h4>
          </Flip>
          <h4>Flug Verspätung</h4>
        </div>
        <div className={classes.row}>
          <h4>Allein in Europa jeden Tag mehr als</h4>
          <Flip left cascade>
            <h4 className={classes.number}>50.000</h4>
          </Flip>
          <h4>Flüge verspätet</h4>
        </div>
      </div>
    );
  }
}

NumberCrunch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NumberCrunch);
