const initialState = {
    paint: "",
  };
  
  export default function paint(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_PAINT':
      return {
        ...state,
        paint: action.paint,
      };
    default:
      return state;
    }
  }