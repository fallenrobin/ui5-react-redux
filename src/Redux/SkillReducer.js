const initialState =

  [
  {
    technology: 'ABAP',
    Date: '01/01/2021',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'React',
    Date: '01/01/2021',
    status: 'None'
  },
  {
    technology: 'ABAP RAP',
    Date: '01/01/2021',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'CAPM',
    Date: '01/01/2021',
    status: 'None'
  },
  {
    technology: 'OData',
    Date: '01/01/2021',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'S4/HANA',
    Date: '01/01/2021',
    status: 'None'
  }
];


const skillReducer = (state = initialState, action) => {
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