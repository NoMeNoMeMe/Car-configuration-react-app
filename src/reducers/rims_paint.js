const initialState = {
    rims_paint: "",
  };
  
  export default function rims_paint(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_RIMS_PAINT':
      return {
        ...state,
        rims_paint: action.rims_paint,
      };
    default:
      return state;
    }
  }