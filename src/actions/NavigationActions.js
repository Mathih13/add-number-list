import dispatcher from '../dispatcher'

export function changeCurrentElement(elementName) {
  dispatcher.dispatch({type: 'CHANGE_CURRENT_ELEMENT', text: elementName})
}
