import React, {Component} from 'react';
import firebase from '../firebase'
import {defaultTheme} from '../theme'
import RaisedButton from 'material-ui/RaisedButton';
import News from './News'
export default class Calculator extends Component {

    submitValues() {
        this.refs.result.innerHTML = ' '
        var resultText = '';

        var dict = {
            1000 : parseInt(get('1000').value),
            500 : parseInt(get('500').value),
            200 : parseInt(get('200').value),
            100 : parseInt(get('100').value),
            50 : parseInt(get('50').value),
            20 : parseInt(get('20').value),
            10 : parseInt(get('10').value),
            5 : parseInt(get('5').value),
            1 : parseInt(get('1').value),
        }

        for (var item in dict) {
            resultText += dict[item] + 'x' + item + 'kr' + '<br>';
        }

        var result = this.calculate(dict)

        if (result != undefined) {
            resultText += 'Total i kasse: ' + result + 'kr <br>';
            var p = prompt('Total: ' + result + '. Tatt ut? (Blank hvis 0...)', '');
            if (p != '') {
            resultText += 'Tatt ut: ' + p + 'kr<br>';
            resultText += 'Igjen i kasse: ' + (result - p) + 'kr';
            }

            this.refs.result.innerHTML = resultText;
            //PlayAudio('audio/Noice.mp3')

            if (result != 0) {
              if (p == '') p = 0
              var ref = firebase.database().ref('/prints').push()
              ref.set({
                date: new Date().getTime(),
                raw: dict,
                inRegister: result,
                resultText: resultText,
                removed: p,
                remaining: result - p
              })

              var ref = firebase.database().ref('/stats').child('removed')
              ref.transaction(count => {
                
                if (count === null) {
                    return count = parseInt(p)
                } else {
                    return count + parseInt(p)
                }
            })

              this.PrintElem(this.refs.result);

              this.refs.result.innerHTML = '';
            }
            
        }
    }



    PrintElem(elem) {
        var date = new Date();
        var dateText = date.getDate() + '.' + (parseInt(date.getMonth())+1) + '.' + date.getFullYear();
        var win = window.open('', 'PRINT', 'height=400,width=600');

        win.document.write('<html><head><title>' + document.title  + '</title>');
        win.document.write('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
        win.document.write('</head><body >');
        win.document.write('<h1 style="font-size: 500%"> Kasse ' + dateText + '</h1>');
        win.document.write('<h3 style="font-size: 400%">' + elem.innerHTML + '</h3>');
        win.document.write('</body> <footer style="font-size: 150%">mathih13.github.com Kasseteller</footer></html>');

        win.document.close(); // necessary for IE >= 10
        win.focus(); // necessary for IE >= 10*/

        setTimeout(function () {
          win.print();
        }, 500);



        return true;
    }

    calculateTotalAmount = function (value, amount) {
      return value*amount;
    };
  
    calculate = function (obj) {
      var resultArray = [];
      for(var o in obj){
        if (obj[o] >= 0) {
          resultArray.push(this.calculateTotalAmount(o, obj[o]));
        } else {
          alert('Values cannot be negative!');
          return;
        }
      }
  
      return resultArray.reduce(this.getSum);
    };
  
    getSum = function (total, num) {
      return total + num;
    }

  render() {
    return (
      <div className="mainPageWrapper">
        <News />
        <div className="calculatorWrapper">
          <div className="form-group row">
              <label htmlFor={1000} className="col-2 col-form-label">1000</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={1000} />
              </div>
              <label htmlFor={500} className="col-2 col-form-label">500</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={500} />
              </div>
              <label htmlFor={200} className="col-2 col-form-label">200</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={200} />
              </div>
              <label htmlFor={100} className="col-2 col-form-label">100</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={100} />
              </div>
              <label htmlFor={50} className="col-2 col-form-label">50</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={50} />
              </div>
              <label htmlFor={20} className="col-2 col-form-label">20</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={20} />
              </div>
              <label htmlFor={10} className="col-2 col-form-label">10</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={10} />
              </div>
              <label htmlFor={5} className="col-2 col-form-label">5</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={5} />
              </div>
              <label htmlFor={1} className="col-2 col-form-label">1</label>
              <div className="col-10">
              <input className="form-control" type="number" defaultValue={0} id={1} />
              </div>
              <br />
              <RaisedButton label="💸" backgroundColor={defaultTheme.mainColor} onClick={() => this.submitValues()}/>
          </div>


          
          <div id="result" ref="result"/>
        </div>

          
      </div>
    )
  }
}

function get(id) {
  return document.getElementById(id);
}

