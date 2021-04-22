const initialState = {
    upholstery: "",
  };
  
  export default function upholstery(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_UPHOLSTERY':
      return {
        ...state,
        upholstery: action.upholstery,
      };
    default:
      return state;
    }
  }