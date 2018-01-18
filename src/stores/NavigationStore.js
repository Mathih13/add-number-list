import { EventEmitter } from 'events'
import React from 'react'
import dispatcher from '../dispatcher'

import Log from '../components/Log'
import Calculator from '../components/Calculator'

class NavigationStore extends EventEmitter {
  constructor() {
    super()
    this.currentElement = <Calculator />
    this.allElements = [
      <Calculator />,
      <Log />
    ]
  }

  getCurrent() {
    return this.currentElement
  }

  changeCurrentElement(elementName) {
    for (var i = 0; i < this.allElements.length; i++) {
      if (elementName == this.allElements[i].type.name) {
        this.currentElement = this.allElements[i]
        this.emit('navigationChange')
        return
      }
    }
  }

  handleActions(action) {
    switch (action.type) {
      case 'CHANGE_CURRENT_ELEMENT': {
        this.changeCurrentElement(action.text)
      }
    }
  }
}

const navigationStore = new NavigationStore
dispatcher.register(navigationStore.handleActions.bind(navigationStore))
export default navigationStore
