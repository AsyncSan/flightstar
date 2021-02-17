import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Zoom from "@material-ui/core/Zoom";

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

export let details = "";

class TextFields extends React.Component {
  constructor() {
    super();
    this.state = {
      button: "",
      text: "",
      multiline: ""
    };
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  enterDetails = btnText => {
    details = (
      <div>
        <Zoom in={true} timeout={400}>
          <div className="buttonReason">
            <h5>Gib uns ein paar Informationen darüber, was passiert ist</h5>
            <TextField
              id="outlined-multiline-flexible"
              label="Was ist passiert?"
              multiline={true}
              rows="6"
              rowsMax="6"
              fullWidth={true}
              onChange={this.handleChange("text")}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              onClick={this.sendDataToParent}
            >
              Weiter
            </Button>
          </div>
        </Zoom>
      </div>
    );
    this.setState({
      button: btnText
    });
  };

  sendDataToParent() {
    if (this.state.text !== "") {
      this.props.clickedButtonReason(this.state);
    }
    return;
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={`${classes.container}`} noValidate autoComplete="off">
        <div className={"chooser"}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Technischer Defekt")}
          >
            Technischer Defekt
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Wetter")}
          >
            Wetter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Streik")}
          >
            Streik
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Crew Problem")}
          >
            Probleme mit der Crew
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Keine Ahnung")}
          >
            Weiß nicht
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            onClick={e => this.enterDetails("Sonstige")}
          >
            Sonstiges
          </Button>
          {details}
        </div>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
