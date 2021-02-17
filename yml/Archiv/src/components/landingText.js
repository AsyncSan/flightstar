import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    margin: "auto",
    width: "73%",
    border: "#ba68c8",

    padding: "10px"
  }
});

class LandingText extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <div ref="scrollToMe">
            <h3 className="h3">
              Ihr Flug in Europa ist ausgefallen oder verspätet?
            </h3>
          </div>
          <h5 className="h5">
            Laut EU-Recht haben Sie ein Anrecht darauf Geld zurück zu erhalten.
            Wir helfen Ihnen dabei!
          </h5>
        </div>
      </form>
    );
  }
}

LandingText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingText);
