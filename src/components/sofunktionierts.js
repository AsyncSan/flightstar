import React from "react";
import Flip from "react-reveal/Flip";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AttachMoney from "@material-ui/icons/AttachMoney";
import GavelIcon from "@material-ui/icons/Gavel";

const styles = theme => ({
  number: {
    color: "red"
  },
  sofunktionierts: {
    "margin-right": "2%",
    "margin-left": "2%",
    "margin-bottom": "4%"
  },
  row: {
    width: "100%",
    "text-align": "center",
    "margin-bottom": "2%"
  },
  icon: {
    "font-size": "80px"
  },
  header: {
    color: "green"
  }
});

class SoFunktionierts extends React.Component {
  state = {
    func: "sofunktionierts"
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.row}`}>
        <Flip left cascade>
          <div>
            <div className={`${classes.sofunktionierts} ${this.state.func}`}>
              <AssignmentIcon className={classes.icon} />
              <h4 className={classes.header}>
                Sie geben Ihre Flug-Details ein: Extra Line
              </h4>
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              <br />
              <br />
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumLorem Ispum
              <br />
              <br />
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum
            </div>
            <div className={`${classes.sofunktionierts} ${this.state.func}`}>
              <AttachMoney className={classes.icon} />
              <h4 className={classes.header}>
                Wir setzen Ihr Recht durch. Geld gibt es fast immer
              </h4>
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              <br />
              <br />
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumLorem Ispum
              <br />
              <br />
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum
            </div>
            <div className={`${classes.sofunktionierts} ${this.state.func}`}>
              <GavelIcon className={classes.icon} />
              <h4 className={classes.header}>
                Sie erhalten Ihre Entschädigung
              </h4>
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              <br />
              <br />
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumLorem Ispum
              <br />
              <br />
              Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem
              Ispum Lorem Ispum Lorem Ispum Lorem Ispum
            </div>
          </div>
        </Flip>
      </div>
    );
  }
}

SoFunktionierts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SoFunktionierts);
