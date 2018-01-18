import { EventEmitter } from 'events'
import React from 'react'
import dispatcher from '../dispatcher'

class CashStore extends EventEmitter {
  constructor() {
    super()
    this.cashDict = {
      1000 : null,
      500 : null,
      200 : null,
      100 : null,
      50 : null,
      20 : null,
      10 : null,
      5 : null,
      1 : null,
    },
    this.total = null
  }

  calculateTotal() {
    var resultArray = [];
    for(var o in this.cashDict){
      if (this.cashDict[o] >= 0) {
        resultArray.push(this.calculateTotalAmount(o, this.cashDict[o]));
      } else {
        alert('Values cannot be negative!');
        return;
      }
    }

    this.total = resultArray.reduce(this.getSum);
  }

  calculateTotalAmount(value, amount) {
    return value*amount;
  }

  getSum(total, num) {
    return total + num;
  }

  getTotal() {
    return this.total
  }

  getValueBasedOnCurrency(currency) {
    console.log(this.cashDict);
    return this.cashDict[currency]
  }

  setValueBasedOnCurrency(currency, value) {
    this.cashDict[currency] = value
    this.emit('valueChange')
  }

  handleActions(action) {
    switch (action.type) {
      case 'GET_TOTAL': {
        this.getTotal()
      }

      case 'SET_VALUE': {
        this.setValueBasedOnCurrency(action.currency, action.value)
      }
    }
  }
}

const cashStore = new CashStore
dispatcher.register(cashStore.handleActions.bind(cashStore))
window.dispatcher = dispatcher
export default cashStore
