const defaults = {
  rawdata: null,
  data: null,
  filteredData: null
};

export const firebaseReducer = (state = defaults, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FULFILLED':
      state = {...state, rawdata: action.payload};
      break;

    case 'SNAPSHOT_TO_ARRAY':
      if (state.rawdata)
        state = {
          ...state,
          data: snapshotToArray(state.rawdata),
          filteredData: filter(null, snapshotToArray(state.rawdata))
        };
      break;

    case 'FILTER_DATA':
      state = {...state, filteredData: filter(action.payload, state.data)};
      break;

    case 'RESET_FILTER':
      state = {...state, filteredData: state.data};
      break;
  }
  return state;
};


function filter(search, array) {
  if (!search)
    return array;

  search = search.toLowerCase();
  if (search.includes(',')) {
    return parameterSearch(search, array);
  } else {
    return singleSearch(search, array);
  }

}

function singleSearch(searchText, array) {
  let returnArr = [];
  array.forEach(item => {
    if (!item.removed) item.removed = "";
    if (itemHasSearch(item, searchText)) returnArr.push(item);
  });
  return returnArr;
}

function parameterSearch(searchText, array) {
  let returnArr = [];
  let sanitizedSearch = searchText.replace(/\s/g, '');
  sanitizedSearch = sanitizedSearch.split(',');

  sanitizedSearch.forEach(searchItem => {
    array.forEach(item => {
      if (!item.removed) item.removed = "";
      if (itemHasSearch(item, searchItem)) {
        returnArr.push(item);
      }
    });
    if (searchItem.includes(':')) {
      let newArr = [];
      returnArr.forEach(item => {
        if (!item.removed) item.removed = "";
        if (itemHasSearch(item, searchItem.replace(':', ''))) {
          newArr.push(item);
        }
    });
    returnArr = newArr;
    }
  });
  return returnArr;
}



function itemHasSearch(item, searchText) {
  if (item.date.toDateString().toLowerCase().includes(searchText) ||
    item.inRegister.toString().toLowerCase().includes(searchText) ||
    item.remaining.toString().toLowerCase().includes(searchText) ||
    item.removed.toString().toLowerCase().includes(searchText)) {
    console.log('wow');
    return true;
  }
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
