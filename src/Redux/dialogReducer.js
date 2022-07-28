function dialogReducer(state = false, action) {
    switch (action.type) {
      case 'OPEN_DIALOG':
        return state;
      case 'CLOSE_DIALOG':
        return [];
      default:
        return state;
    }
  }
  
    export default dialogReducer;