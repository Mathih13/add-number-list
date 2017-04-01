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
    win.document.write('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
    win.document.write('</head><body >');
    win.document.write('<h1> Kasse ' + dateText + '</h1>');
    win.document.write('<h3 style="font-size: 200%">' + elem.innerHTML + '</h3>');
    win.document.write('</body> <footer>mathih13.github.com Kasseteller</footer></html>');

    win.document.close(); // necessary for IE >= 10
    win.focus(); // necessary for IE >= 10*/

    setTimeout(function () {
      win.print();
      win.close();
    }, 500);



    return true;
}


function get(id) {
  return document.getElementById(id);
}
