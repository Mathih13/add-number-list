import React, {Component} from 'react';

import {defaultTheme} from '../theme'

// Simple wrapper for whatever is supposed to be main view
// Makes it easier to make "general" css and other changes
export default class MainView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.element}
      </div>
    )
  }
}
