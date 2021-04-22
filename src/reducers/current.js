const initialState = {
    current: "index",
  };
  
  export default function current(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_CURRENT':
      return {
        ...state,
        current: action.current,
      };
    default:
      return state;
    }
  }