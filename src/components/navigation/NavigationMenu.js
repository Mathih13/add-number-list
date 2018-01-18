import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import {defaultTheme} from '../../theme'

import * as NavigationActions from '../../actions/NavigationActions'


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
            onClick={() => NavigationActions.changeCurrentElement('Calculator')}
          />
          <MenuItem primaryText="Logg"
            onClick={() => NavigationActions.changeCurrentElement('Log')}
          />
          <MenuItem primaryText="Kilde" onClick={() => window.location = 'https://github.com/Mathih13/add-number-list'}/>
        </IconMenu>
      </div>
    )
  }
}
