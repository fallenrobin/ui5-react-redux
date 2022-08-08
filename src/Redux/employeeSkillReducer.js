const employeeSkillData =
  [
    {
      skillID: 1,
      date: '01/01/2020',
      rating: 3,
      id: 1
    },
    {
      skillID: 4,
      date: '02/01/2021',
      rating: 2,
      id: 2
    },
    {
      skillID: 7,
      date: '03/01/2021',
      rating: 4,
      id: 3
    },
  ];


function employeeSkillReducer(state = employeeSkillData, action) {


  switch (action.type) {
    case 'GET_SKILLS':
      return state;
    case 'SET_SKILL':
      return [...state, action.payload];
    case 'SET_EDITED_RATING':
      let employeeSkills = state.filter(employeeSkill => employeeSkill.id === action.payload.id);
      for (const employeeSkill of employeeSkills) {
        employeeSkill.rating = action.payload.rating
        employeeSkill.date = action.payload.date
      };
      // employeeSkills[0].rating = action.payload.rating;
      console.log('in skill reducer, new state should be:', state);
      return [...state];
    default:
      return state;
  }
}


export default employeeSkillReducer;