const initialState = {
    arr: []
  };
  
  export default function additional(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ADDITIONAL':
      let idAlreadyExists = state.arr.indexOf(action.payload.new) > -1;
      let arr = state.arr.slice();

      if(idAlreadyExists) {
          arr = arr.filter(id => id !== action.payload.new);                
      }     
      else {
          arr.push(action.payload.new);            
      }      

      return {
          ...state,
          arr
      };
    default:
      return state;
    }
  }