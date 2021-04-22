const initialState = {
    seats: "",
  };
  
  export default function seats(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_SEATS':
      return {
        ...state,
        seats: action.seats,
      };
    default:
      return state;
    }
  }