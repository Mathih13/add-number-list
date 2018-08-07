import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Search from 'material-ui/svg-icons/action/search';
import {defaultTheme} from '../../theme'

import HelpDialog from '../HelpDialog';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    };
    console.log(props)
  }

  search(e) {
    e.preventDefault();
    window.location = `${process.env.PUBLIC_URL}/log/${this.state.searchText}`
  }
  removeSearch() {
    this.props.router.push('/log/')
    this.props.router.go('/log/')
  }

  render() {
    return (
      <div>
        <HelpDialog/>
        <form onSubmit={this.search.bind(this)}>
          <Search color={'#fff'} style={{ float: 'left', marginTop: '5%', marginLeft: '-2.5%' }}/>
          <TextField
            hintText="Søk"
            hintStyle={{color: defaultTheme.basic}}
            inputStyle={{color: defaultTheme.basic}}
            onChange={(event, value) => this.setState({searchText: value})}
          />
          {
            this.props.pathname != "/log/" &&
            <IconButton tooltip="Fjern Søk" onClick={() => this.removeSearch()}>
              <Close color={'#fff'} />
            </IconButton>
          }
          <input type={'submit'} style={{display: 'none'}}/>
        </form>
      </div>


    )
  }
}
