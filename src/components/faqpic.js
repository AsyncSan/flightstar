import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {}
});

class Faqpic extends React.Component {
  state = {
    landing: "faqpic"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.container} ${this.state.landing}`}>
        <h2>Häufige Fragen</h2>
        <p>Die wichtigsten Informationen auf einen Blick.</p>
      </div>
    );
  }
}

Faqpic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faqpic);
