import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

class EntschaedigungErhalten extends React.Component {
  constructor() {
    super();
    this.state = {
      mitreisende: "",
      radioZahlung: "",
      textZahlung: "",
      radioForderung: ""
    };
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  onRadioChange(value) {
    console.log(value);
    if (value === "ja") {
      this.enterDetails();
    }
    if (value === "nein") {
      details = "";
    }
    this.setState({
      radioZahlung: value
    });
  }
  onRadioChange1(value) {
    this.setState({
      radioForderung: value
    });
  }

  enterDetails = btnText => {
    details = (
      <div>
        <h5>Bitte nenne uns die Höhe Art und Höhe der Entschädigung:</h5>
        <TextField
          id="outlined-multiline-flexible"
          label="Was ist passiert?"
          multiline={true}
          rows="2"
          rowsMax="2"
          fullWidth={true}
          onChange={this.handleChange("textZahlung")}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  };

  sendDataToParent() {
    if (
      this.state.mitreisende !== "" &&
      this.state.radioZahlung !== "" &&
      this.state.radioForderung !== ""
    ) {
      console.log("I want to send");
      this.props.collectAndSendMail(this.state);
    }
    return;
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={`${classes.container}`} noValidate autoComplete="off">
        <div className={"chooser"}>
          <TextField
            id="outlined-name"
            type="number"
            label="Mitreisende"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("mitreisende")}
            margin="normal"
            variant="outlined"
          />
          <hr />
          <h5>Hast du von der Fluggesellschaft ein Angebot erhalten?</h5>
          <form>
            <div>
              <input
                type="radio"
                id="ja"
                name="drone"
                value="Ja"
                onChange={e => this.onRadioChange("ja")}
              />
              <label htmlFor="ja">Ja</label>
            </div>

            <div>
              <input
                type="radio"
                id="nein"
                name="drone"
                value="Nein"
                onChange={e => this.onRadioChange("nein")}
              />
              <label htmlFor="nein">Nein</label>
            </div>
          </form>
          {details}
          <hr />
          <h5>Hast du bereits eine Zahlung erhalten?</h5>
          <form>
            <div>
              <input
                type="radio"
                id="ja"
                name="drone"
                value="Ja"
                onChange={e => this.onRadioChange1("ja")}
              />
              <label htmlFor="ja">Ja</label>
            </div>

            <div>
              <input
                type="radio"
                id="nein"
                name="drone"
                value="Nein"
                onChange={e => this.onRadioChange1("nein")}
              />
              <label htmlFor="nein">Nein</label>
            </div>
          </form>
          <hr />
          <Button
            variant="contained"
            color="secondary"
            fullWidth={true}
            onClick={this.sendDataToParent}
          >
            Mail senden
          </Button>
        </div>
      </form>
    );
  }
}

EntschaedigungErhalten.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EntschaedigungErhalten);
