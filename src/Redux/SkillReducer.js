const initialState =

  [
  {
    technology: 'ABAP',
    Date: '01/01/2020',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'React',
    Date: '02/01/2021',
    rating: '2',
    status: 'None'
  },
  {
    technology: 'ABAP RAP',
    Date: '03/01/2021',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'CAPM',
    Date: '06/01/2021',
    rating: '1',
    status: 'None'
  },
  {
    technology: 'OData',
    Date: '01/01/2022',
    rating: '3',
    status: 'Success'
  },
  {
    technology: 'S4/HANA',
    Date: '06/01/2022',
    rating: '4',
    status: 'None'
  }
];


function skillReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SKILLS':
      return state;
    case 'taco':
      return [];
    default:
      return state;
  }
}

  export default skillReducer;