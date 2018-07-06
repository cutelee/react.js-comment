import React, { Component } from 'react';
import { Buttons } from '../../views/';

class Button extends Component {
  extend() {
    return (
      <div>
          <Buttons itemType="button-PREV" class="btn btn-primary"></Buttons>
          <Buttons itemType="button-NEXT" class="btn btn-primary"></Buttons>
      </div>
    );
  }
}

export default Button;
