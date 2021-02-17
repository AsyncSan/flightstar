import React from "react";
import PropTypes from "prop-types";
import FlightChooser from "./flightChooser";
import { withStyles } from "@material-ui/core/styles";
import LandingText from "./landingText";
import BelowLanding from "./belowLanding";
import NumberCrunch from "./numbercrunch";
import SoFunktionierts from "./sofunktionierts";
import TopPicture from "./toppicture";
import Faqpic from "./faqpic";
import Faqmenu from "./faqmenu";
import BottomMenu from "./bottommenu";
import * as Eva from "./../logic/truethynessChecker";
import ReasonChoose from "./reasonChoose";
import ButtonsReason from "./buttonsReason";
import Zoom from "@material-ui/core/Zoom";
import EntschaedigungErhalten from "./entschaedigungErhalten";
import CollectAndSend from "./collectAndSend";

export let dataComp;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    direction: "column"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  flight: {}
});

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      lateOption: 0,
      dataComponent: 1,
      progress: 30,
      radio: "",
      realArrivalTime: "",
      reason: "",
      reasonText: ""
    };
    this.checkDateAndNo = this.checkDateAndNo.bind(this);
    this.clickedReasonButton = this.clickedReasonButton.bind(this);
    this.clickedButtonReason = this.clickedButtonReason.bind(this);
    this.collectAndSendMail = this.collectAndSendMail.bind(this);
  }

  componentWillMount() {
    dataComp = <FlightChooser checkDateAndNo={this.checkDateAndNo} />;
  }

  setReasonChoose(param) {
    dataComp = (
      <Zoom>
        <ReasonChoose
          name={param}
          clickedReasonButton={this.clickedReasonButton}
        />
      </Zoom>
    );
    this.setState({
      dataComponent: 2
    });
  }

  checkDateAndNo(param, e) {
    console.log(param);
    if (Eva.checkIfDataAreSet(param)) {
      this.setState({
        name: param
      });
      this.setReasonChoose(param.name);

      console.log("still got it");
    } else {
      console.log("There is some more work to do!");
    }
  }

  clickedReasonButton(param) {
    console.log("the Reason Button has returned its long journey");
    console.log(param);
    dataComp = <ButtonsReason clickedButtonReason={this.clickedButtonReason} />;
    this.setState({
      realArrivalTime: param.name,
      radio: param.radio
    });
  }
  clickedButtonReason(param) {
    console.log("clickedbuttonReason was sent");
    dataComp = (
      <EntschaedigungErhalten collectAndSendMail={this.collectAndSendMail} />
    );
    this.setState({
      reason: param.button,
      reasonText: param.text
    });
  }

  collectAndSendMail(param) {
    dataComp = <CollectAndSend collectAndSendMail={this.collectAndSendMail} />;
    console.log("collectAndSendMail");
    this.forceUpdate();
  }

  evaluateFlightRound() {
    if (this.state.dataComponent === 1) {
      console.log("hey");
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.container} ${this.state.landing}`}>
        <TopPicture />
        <LandingText />

        {dataComp}
        {/* <FlightChooser checkDateAndNo={this.checkDateAndNo} /> */}

        <BelowLanding />

        <NumberCrunch />
        <SoFunktionierts />
        <Faqpic />
        <Faqmenu />
        <BottomMenu />
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
