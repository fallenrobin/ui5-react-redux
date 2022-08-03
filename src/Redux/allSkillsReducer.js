const initialSkills =
    [
        {
            name: 'React',
            id: 1,
            type: 1
        },
    ];

/* 
types:
    1: front end
    2: back end
    3: design
*/


function allSkillsReducer(state = initialSkills, action) {


    switch (action.type) {
        case 'GET_SKILLS':
            return state;
        case 'SET_SKILL':
            return [...state, action.payload];
        case 'SET_EDITED_RATING':
            let employeeSkills = state.filter(employeeSkill => employeeSkill.id === action.payload.id);
            for (const employeeSkill of employeeSkills) {
                employeeSkill.rating = action.payload.rating
            };
            // employeeSkills[0].rating = action.payload.rating;
            console.log('in skill reducer, new state should be:', state);
            return [...state];
        default:
            return state;
    }
}


export default allSkillsReducer;