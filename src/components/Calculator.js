import React, {Component} from 'react';

import {defaultTheme} from '../theme'

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

        var result = new Calculator().calculate(dict);

        if (result != undefined) {
            resultText += 'Total i kasse: ' + result + 'kr <br>';
            var p = prompt('Total: ' + result + '. Tatt ut? (Blank hvis 0...)', '');
            if (p != '') {
            resultText += 'Tatt ut: ' + p + 'kr<br>';
            resultText += 'Igjen i kasse: ' + (result - p) + 'kr';
            }

            get('result').innerHTML = resultText;
            //PlayAudio('audio/Noice.mp3')
            this.PrintElem(get('result'));
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
        win.close();
        }, 500);



        return true;
    }

  render() {
    return (
      <div >
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
            <button type="button" className="btn btn-primary btn-block" onClick={this.submitValues()}>💸</button>
        </div>

        <div ref="result"/>
      </div>
    )
  }
}

function get(id) {
  return document.getElementById(id);
}

function Calculator() {
  this.calculateTotalAmount = function (value, amount) {
    return value*amount;
  };

  this.calculate = function (obj) {
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

  this.getSum = function (total, num) {
    return total + num;
  }


}


