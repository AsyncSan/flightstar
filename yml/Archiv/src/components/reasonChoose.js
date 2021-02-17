import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import FlightIcon from "@material-ui/icons/FlightTakeoff";
import TextField from "@material-ui/core/TextField";
import * as Test from "./../logic/truethynessChecker";

import Zoom from "@material-ui/core/Zoom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",

    "align-items": "center",
    float: "none",
    margin: "0 auto"
  },
  button: {
    "margin-right": "5%",
    "margin-bottom": "2%"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

export let buttonSupport;

class ReasonChoose extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      buttonClick: "",
      value: "ja",
      date: "01.01.2018",
      radio: ""
    };
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  componentDidMount() {
    this.refs.scrollToMe.scrollIntoView({ behavior: "smooth" });
  }
  onRadioChange(value) {
    this.setState({
      radio: value
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  clickedVerspaetung = () => {
    buttonSupport = (
      <Zoom in={true} timeout={400}>
        <div className="buttonSupport">
          <div>
            <span>Bitte nenne uns deine tatsächliche Ankunftszeit</span>
          </div>
          <div className="buttonSupportDiv">
            <div className="divpad">
              <TextField
                id="date"
                label="Flight Date"
                type="date"
                defaultValue="01.10.2018"
                onChange={this.handleChange("date")}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                type="time"
                id=""
                label="Time"
                defaultValue="15:00"
                className=""
                onChange={this.handleChange("name")}
              />
            </div>
            <div>Flug trotz Verspätung angetreten?</div>
            <div className="divpad">
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
            </div>
            <Button
              variant="contained"
              color="secondary"
              className=""
              onClick={this.sendDataToParent}
            >
              Weiter
            </Button>
          </div>
        </div>
      </Zoom>
    );
    this.forceUpdate();
  };

  clickedAufhebung = () => {
    buttonSupport = (
      <div className="buttonSupport">
        <span>Wie viele Stunden später bist du angekommen?</span>
        <div className="buttonSupportDiv">
          <TextField
            type="number"
            id=""
            label="Stunden"
            className=""
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
          <Button variant="contained" color="secondary" className="">
            Weiter
          </Button>
        </div>
      </div>
    );
    this.forceUpdate();
  };
  clickedVerweigerung = () => {
    buttonSupport = (
      <div className="buttonSupport">
        <span>Was wurde als Grund angegeben?</span>
        <div className="buttonSupportDiv">
          <TextField id="" label="Grund" className="" />
          <Button variant="contained" color="secondary" className="">
            Weiter
          </Button>
        </div>
      </div>
    );
    this.forceUpdate();
  };
  clickedAlk = () => {
    buttonSupport = (
      <div className="buttonSupport">
        <span>Gib uns ein paar Details</span>
        <div className="buttonSupportDiv">
          <TextField
            id=""
            label="Stunden"
            className=""
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
          <Button variant="contained" color="secondary" className="">
            Weiter
          </Button>
        </div>
      </div>
    );
    this.forceUpdate();
  };

  sendDataToParent(params) {
    console.log(params);
    // console.log(e);
    if (Test.checkIfChooseDataSet(this.state)) {
      this.props.clickedReasonButton(this.state);
      return;
    } else {
      alert("Bitte alle Fleder ausfüllen");
      return;
    }
  }

  render() {
    const { classes } = this.props;
    let flightRoute = "MUC -> FRA";
    let routeText = "Von München nach Frankfurt am Main";
    return (
      <form className={`${classes.container}`} noValidate autoComplete="off">
        <div className={"chooser"} ref="scrollToMe">
          <h2>Ihr Flug: {this.props.name}</h2>
          <p className="flightRoute">{flightRoute}</p>
          {routeText}

          <h3>Was ist geschehen?</h3>
          <Zoom in={true} timeout={100}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={this.clickedVerspaetung}
              fullWidth={true}
              //onClick={send.sendFirstDataToServer.bind(this, this.state)}
              //onClick={this.sendDataToParent.bind(this, this.state)}
            >
              {this.props.column}
              Verspätung
              <FlightIcon className={classes.rightIcon} />
            </Button>
          </Zoom>
          <Zoom in={true} timeout={200}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={this.clickedAufhebung}
              fullWidth={true}
            >
              Aufhebung
              <FlightIcon className={classes.rightIcon} />
            </Button>
          </Zoom>
          <Zoom in={true} timeout={300}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={this.clickedVerweigerung}
              fullWidth={true}
              //onClick={send.sendFirstDataToServer.bind(this, this.state)}
            >
              Verweigerung
              <FlightIcon className={classes.rightIcon} />
            </Button>
          </Zoom>
          <Zoom in={true} timeout={400}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={this.clickedAlk}
              fullWidth={true}
              //onClick={send.sendFirstDataToServer.bind(this, this.state)}
            >
              Pilot betrunken
              <FlightIcon className={classes.rightIcon} />
            </Button>
          </Zoom>
          {buttonSupport}
        </div>
      </form>
    );
  }
}

ReasonChoose.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReasonChoose);
