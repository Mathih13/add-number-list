import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import ActionPrint from 'material-ui/svg-icons/action/print';

import CircularProgress from 'material-ui/CircularProgress';

import firebase from '../firebase'
import {defaultTheme} from '../theme'

export default class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      firebaseData: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    firebase.database().ref('/prints/').once('value', (snapshot) => {
      this.setState({ firebaseData: this.snapshotToArray(snapshot), loading: false })

    })
  }

  snapshotToArray = (snapshot) => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val(); 
        item.key = childSnapshot.key;
        item.date = new Date(item.date)
        returnArr.push(item);
    });

    return returnArr;
  };

  PrintObj(obj) {
    
        var dateText = obj.date.getDate() + '.' + (parseInt(obj.date.getMonth())+1) + '.' + obj.date.getFullYear();
        var win = window.open('', 'PRINT', 'height=400,width=600');

        win.document.write('<html><head><title>' + 'Kasseteller'  + '</title>');
        win.document.write('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
        win.document.write('</head><body >');
        win.document.write('<h1 style="font-size: 500%"> Kasse ' + dateText + '</h1>');
        win.document.write('<h3 style="font-size: 400%">' + obj.resultText + '</h3>');
        win.document.write('</body> <footer style="font-size: 150%">mathih13.github.com Kasseteller</footer></html>');

        win.document.close(); // necessary for IE >= 10
        win.focus(); // necessary for IE >= 10*/

        setTimeout(function () {
          win.print();
        }, 500);



        return true;
    }

  render() {
    if (this.state.loading) return <CircularProgress  style={{ marginTop: '15%' }} color={defaultTheme.mainColor} size={60} thickness={7} />
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn className="dataColumn">ID</TableHeaderColumn>
            <TableHeaderColumn className="dataColumn">Dato</TableHeaderColumn>
            <TableHeaderColumn className="dataColumn">I Kasse</TableHeaderColumn>
            <TableHeaderColumn className="dataColumn">Fjernet</TableHeaderColumn>
            <TableHeaderColumn className="dataColumn">Igjen</TableHeaderColumn>
            <TableHeaderColumn className="dataColumn"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.state.firebaseData.map(data => {
            return (
              <TableRow key={data.key} >
              <TableRowColumn className="dataPoint">{data.key}</TableRowColumn>
              <TableRowColumn className="dataPoint">{data.date.toDateString()}</TableRowColumn>
              <TableRowColumn className="dataPoint">{data.inRegister}</TableRowColumn>
              <TableRowColumn className="dataPoint">{data.removed}</TableRowColumn>
              <TableRowColumn className="dataPoint">{data.remaining}</TableRowColumn>
              <TableRowColumn className="dataPoint"><FlatButton onClick={() => this.PrintObj(data)}><ActionPrint/></FlatButton></TableRowColumn>
            </TableRow>
            ) 
          })}
        </TableBody>
      </Table>
    )
  }
}