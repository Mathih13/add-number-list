// Anything that happens direclt on index.html goes here.

var calculator = new Calculator();

var result;
var resultText = '';

function submitValues() {
  get('result').innerHTML = ' '
  resultText = '';

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

  result = calculator.calculate(dict);

  if (result != undefined) {
    resultText += 'Total i kasse: ' + result + 'kr';
    get('result').innerHTML = resultText;
  }
}



function PrintElem(elem)
{
    var date = new Date();
    var dateText = date.getDate() + '.' + (parseInt(date.getMonth())+1) + '.' + date.getFullYear();
    var win = window.open('', 'PRINT', 'height=400,width=600');

    win.document.write('<html><head><title>' + document.title  + '</title>');
    win.document.write('</head><body >');
    win.document.write('<h1> Kasse ' + dateText + '</h1>');
    win.document.write(elem.innerHTML);
    win.document.write('</body></html>');

    win.document.close(); // necessary for IE >= 10
    win.focus(); // necessary for IE >= 10*/

    win.print();
    win.close();

    return true;
}


function get(id) {
  return document.getElementById(id);
}
