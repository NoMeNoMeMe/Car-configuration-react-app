const initialState = {
    engine: "",
  };
  
  export default function engine(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_ENGINE':
      return {
        ...state,
        engine: action.engine,
      };
    default:
      return state;
    }
  }