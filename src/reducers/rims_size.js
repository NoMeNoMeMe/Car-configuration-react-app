const initialState = {
    rims_size: "",
  };
  
  export default function rims_size(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_RIMS_SIZE':
      return {
        ...state,
        rims_size: action.rims_size,
      };
    default:
      return state;
    }
  }