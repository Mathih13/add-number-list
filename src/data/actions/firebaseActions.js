import store from '../store/store';
import firebase from '../../firebase'

export function fetchData(url) {
  store.dispatch({
    type: 'FETCH_DATA',
    payload: firebase.database().ref('/prints/').once('value')
  }).then(() => cleanFirebaseData());

}

export function cleanFirebaseData() {
  store.dispatch({ type: 'SNAPSHOT_TO_ARRAY' });
}

export function filterFirebaseData(search) {
  store.dispatch({ type: 'FILTER_DATA', payload: search });
}
