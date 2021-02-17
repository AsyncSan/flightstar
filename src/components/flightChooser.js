import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlightIcon from "@material-ui/icons/FlightTakeoff";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",

    align: "center",
    float: "none",
    margin: "0 auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class TextFields extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "LH111",
      date: "22.06.2018",
      multiline: "Controlled",
      flightClass: "flightClass",
      chooser: "choose"
    };
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  sendDataToParent(e, params) {
    this.props.checkDateAndNo(e, params);
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={`${classes.container}`} noValidate autoComplete="off">
        <div className={"chooser"}>
          <TextField
            id="standard-name"
            label="Flight No."
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
          />

          <TextField
            id="date"
            label="Flight Date"
            type="date"
            defaultValue=""
            onChange={this.handleChange("date")}
            className={`${classes.textField} ${this.state.flightClass}`}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={this.sendDataToParent.bind(this, this.state)}
            //onClick={send.sendFirstDataToServer.bind(this, this.state)}
          >
            Auszahlung
            <FlightIcon className={classes.rightIcon} />
          </Button>
        </div>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
