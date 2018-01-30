import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from './NavigationMenu'

import {defaultTheme} from '../../theme'

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppBar
        style={{ backgroundColor: defaultTheme.mainColor }}
        title="Kasseteller"
        iconElementLeft={<NavigationMenu />}
      />
    )
  }
}
