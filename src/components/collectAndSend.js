import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { Redirect } from "react-router";

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

class CollectAndSend extends React.Component {
  constructor() {
    super();
    this.state = {
      mitreisende: "",
      radioZahlung: "",
      textZahlung: "",
      radioForderung: "",
      redirect: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({ redirect: true });
  };

  sentMail() {}

  render() {
    const { classes } = this.props;
    // if (this.state.redirect) {
    //   return <Redirect push to="/mailsent" />;
    // }
    return (
      <div className={`${classes.container}`}>
        <form
          action="https://formspree.io/yuekseltoprak@gmail.com"
          method="POST"
        >
          <Input
            type="email"
            name="_replyto"
            placeholder="Your E-Mail"
            fullWidth="True"
          />
          <Button
            fullWidth="true"
            variant="contained"
            color="secondary"
            onClick={this.handleOnClick}
          >
            <Input type="submit" value="Send" />
          </Button>
        </form>
      </div>
    );
  }
}

CollectAndSend.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CollectAndSend);
