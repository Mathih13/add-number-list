// The calculation and parsing of input goes here

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

    console.log(resultArray);
    return resultArray.reduce(this.getSum);
  };

  this.getSum = function (total, num) {
    return total + num;
  }


}
