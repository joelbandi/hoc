import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Space } from 'rebass';

class Navbar extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
      <Button backgroundColor="error" color="white" inverted rounded >
        <Link to="/"> Home </Link>
      </Button>
      <Space x={4} />
      <Button backgroundColor="primary" color="white" inverted rounded >
        <Link to="secret"> Secret </Link>
      </Button>
      <Space x={4} />
      <Button backgroundColor="success" onClick={this.props.toggleSignIn} color="white" inverted rounded >
        Sign {this.props.signIn ? "Out" : "In"}
      </Button>
      </div>
    );
  }
}

export default Navbar;
