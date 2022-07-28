const skillReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SKILL':
        return action.payload;
      case 'taco':
        return [];
      default:
        return state;
    }
  };

  export default skillReducer;