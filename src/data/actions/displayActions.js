import store from '../store/store';

export function showContainer() {
  store.dispatch({
    type: 'SHOW_CONTAINER',
  });
}

export function hideContainer() {
  store.dispatch({
    type: 'HIDE_CONTAINER',
  });
}
