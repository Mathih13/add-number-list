const defaults = {
  rawdata: null,
  data: null,
  filteredData: null
};

export const firebaseReducer = (state = defaults, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FULFILLED':
      state = { ...state, rawdata: action.payload };
      break;

    case 'SNAPSHOT_TO_ARRAY':
      if (state.rawdata)
        state = { ...state, data: snapshotToArray(state.rawdata)};
      break;

    case 'FILTER_DATA':
      state = { ...state, filteredData: filter(action.payload, state.data) }
      break;
  }
  return state;
};



function filter(search, array) {
  let returnArr = [];
  search = search.toLowerCase();
  array.forEach(item => {
    if (!item.removed) item.removed = "";
    if (item.date.toDateString().toLowerCase().includes(search) ||
      item.inRegister.toString().toLowerCase().includes(search) ||
      item.remaining.toString().toLowerCase().includes(search) ||
      item.removed.toString().toLowerCase().includes(search))  {

      returnArr.push(item);
    }
  });
  return returnArr.reverse();
}


function snapshotToArray(snapshot) {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    item.date = new Date(item.date)
    returnArr.push(item);
  });

  return returnArr.reverse();
};
