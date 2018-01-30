import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import {defaultTheme} from '../../theme'



import {
  Link
} from 'react-router'

export default class NavigationMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MenuIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          iconStyle={{ color: defaultTheme.basic }}
        >
          <MenuItem primaryText="Hjem"
          containerElement={<Link to={`${process.env.PUBLIC_URL}/`} />}
          />
          <MenuItem primaryText="Logg" containerElement={<Link to={`${process.env.PUBLIC_URL}/log`} />} />
          <MenuItem primaryText="Kilde" onClick={() => window.location = 'https://github.com/Mathih13/add-number-list'}/>
        </IconMenu>
      </div>
    )
  }
}
