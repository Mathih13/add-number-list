import React from 'react';
import Progress from './Progress';
import {defaultTheme} from "../theme";
import IconButton from 'material-ui/IconButton';

import Help from 'material-ui/svg-icons/action/help-outline';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import firebase from "../firebase";


export default class HelpDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: true,
      firebaseData: null,
    };
  }



  fetchData() {
    firebase.database().ref('/help/searchHelpText').once('value', (snapshot) => {
      this.setState({ firebaseData: snapshot.val(), loading: false });
    })
  }

  handleOpen = () => {
    this.setState({open: true});
    this.fetchData()
  };

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    return (
      <div style={{ marginRight: '-85%' }}>
        <Dialog
          title="Søking"
          actions={<FlatButton
            label="Lukk"
            onClick={this.handleClose}
          />}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          { this.state.loading && <Progress/> }
          { !this.state.loading && this.state.firebaseData}
        </Dialog>

        <IconButton tooltip="Hjelp" onClick={() => this.handleOpen()}>
          <Help color={'#fff'} />
        </IconButton>
      </div>
    );
  }
}

