const defaults = {
  show: true
};

export const logLoadReducer = (state = defaults, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      state = { ...state, show: true };
      break;

    case 'HIDE_LOADER':
      state = { ...state, show: false };
      break;
  }

  return state;
};
