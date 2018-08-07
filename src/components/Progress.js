import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {defaultTheme} from "../theme";

export default class Progress extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LinearProgress mode="indeterminate" color={defaultTheme.mainColor} />
    );
  }
}