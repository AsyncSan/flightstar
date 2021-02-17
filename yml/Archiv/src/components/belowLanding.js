import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    "background-color": "lightgray",
    width: "100%",
    "text-align": "center"
  }
});

class BelowLanding extends React.Component {
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
          <div>
            <h3 className="h3-below">Kein Inkasso. Nur Geld sofort!</h3>
          </div>
          <div>
            <h4 className="h4">✓ Jetzt bis zu 600€ zurück erhalten!</h4>
          </div>
          <div>
            <h4 className="h4">✓ Exklusiv Betreuung für Chinesische Kunden</h4>
          </div>
          <div>
            <h4 className="h4">✓ Die Nummer Eins in Europa</h4>
          </div>
        </div>
      </form>
    );
  }
}

BelowLanding.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BelowLanding);
