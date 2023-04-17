export const infoinitailState = {
  loading: true,
  info: {},
  error: '',
};

export const MuseumInfoReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case 'FETCH_INFO':
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'error',
      };

    default:
      return state;
  }
};
