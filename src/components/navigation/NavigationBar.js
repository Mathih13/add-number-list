import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from './NavigationMenu'
import Search from './Search'

import {defaultTheme} from '../../theme'

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.location.pathname.includes('/log'))
      return (
        <AppBar
          style={{ backgroundColor: defaultTheme.mainColor }}
          title="Kasseteller"
          iconElementLeft={<NavigationMenu />}
          iconElementRight={<Search pathname={this.props.location.pathname} router={this.props.router}/>}
        />
      )
    else
      return (
        <AppBar
          style={{ backgroundColor: defaultTheme.mainColor }}
          title="Kasseteller"
          iconElementLeft={<NavigationMenu />}
        />
      )
  }
}
