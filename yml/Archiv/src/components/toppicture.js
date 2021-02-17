import React from "react";
import Flip from "react-reveal/Flip";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Background from "./../files/sky.jpg";

const styles = theme => ({
  number: {
    color: "red"
  },
  backgroundrow: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    overflow: "hidden",
    height: "200px",
    width: "100%"
  },
  icon: {
    "font-size": "80px"
  }
});

class TopPicture extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.backgroundrow} ${"toppic"}`}>
        <Flip left cascade>
          <div />
        </Flip>
      </div>
    );
  }
}

TopPicture.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPicture);
