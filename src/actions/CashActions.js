import dispatcher from '../dispatcher'

export function setValueBasedOnCurrency(currency, value) {
  dispatcher.dispatch({type: 'SET_VALUE', currency: currency, value: value})
}
