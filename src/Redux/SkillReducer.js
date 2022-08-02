const employeeSkillData =
  [
    {
      technology: 'ABAP',
      date: '01/01/2020',
      rating: '3',
      id: 1
    },
    {
      technology: 'React',
      date: '02/01/2021',
      rating: '2',
      id: 2
    },
    {
      technology: 'ABAP RAP',
      date: '03/01/2021',
      rating: '3',
      id: 3
    },
    {
      technology: 'CAPM',
      date: '06/01/2021',
      rating: '1',
      id: 4
    },
    {
      technology: 'OData',
      date: '01/01/2022',
      rating: '3',
      id: 5
    },
    {
      technology: 'S4/HANA',
      date: '06/01/2022',
      rating: '4',
      id: 6
    }
  ];


function skillReducer(state = employeeSkillData, action) {
  switch (action.type) {
    case 'GET_SKILLS':
      return state;
    case 'SET_SKILL':
      return [...state, action.payload];
    case 'SET_EDITED_RATING':
      state = state.filter(state.value.id != action.payload.id);
      console.log('in skill reducer, new state should be:', state);
      return state;
    default:
      return state;
  }
}


export default skillReducer;