const defaults = {
  status: false
};

export const displayReducer = (state = defaults, action) => {
  switch (action.type) {
    case 'SHOW_CONTAINER':
      state = { ...state, status: true };
      break;

    case 'HIDE_CONTAINER':
      state = { ...state, status: false };
      break;
  }

  return state;
};
