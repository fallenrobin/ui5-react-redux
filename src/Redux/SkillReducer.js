const initialState =

  [
  {
    technology: 'ABAP',
    date: '01/01/2020',
    rating: '3',
  },
  {
    technology: 'React',
    date: '02/01/2021',
    rating: '2',
  },
  {
    technology: 'ABAP RAP',
    date: '03/01/2021',
    rating: '3',
  },
  {
    technology: 'CAPM',
    date: '06/01/2021',
    rating: '1',
  },
  {
    technology: 'OData',
    date: '01/01/2022',
    rating: '3',
  },
  {
    technology: 'S4/HANA',
    date: '06/01/2022',
    rating: '4',
  }
];


function skillReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SKILLS':
      return state;
    case 'SET_SKILL':
      // console.log(action.payload);
      return [...initialState, action.payload];
    default:
      return state;
  }
}

console.log('in skill reducer, new state should be:', initialState);

  export default skillReducer;