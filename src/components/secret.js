import React, { Component, PropTypes } from 'react';
import { Blockquote } from 'rebass';

export class Secret extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Blockquote href="https://quotes.tubegator.com/mrt.php" source="Mr T" >
        I pity the fool.
      </Blockquote>
    );
  }
}


export default Secret;
