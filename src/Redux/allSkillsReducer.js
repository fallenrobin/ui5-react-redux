const allSkills =
    [
        {
            name: 'React',
            id: 1,
            type: 1
        },
        {
            name: 'UI5',
            id: 2,
            type: 1
        },
        {
            name: 'Tailwind',
            id: 3,
            type: 1
        },
        {
            name: 'ABAP',
            id: 4,
            type: 2
        },
        {
            name: 'Java',
            id: 5,
            type: 2
        },
        {
            name: 'PostgreSQL',
            id: 6,
            type: 2
        },
        {
            name: 'Figma',
            id: 7,
            type: 3
        },
        {
            name: 'Adobe Illustrator',
            id: 8,
            type: 3
        },
        {
            name: 'ProofHub',
            id: 9,
            type: 3
        }
    ];

/* 
types:
    1: front end
    2: back end
    3: design
*/


function allSkillsReducer(state = allSkills, action) {


    switch (action.type) {
        case 'GET_SKILLS':
            return state;
        case 'SET_SKILL':
            return [...state, action.payload];
        case 'SET_NEW_SKILL':
            console.log('in allSkill reducer, new state should be:', state);
            return [...state, action.payload];
        default:
            return state;
    }
}


export default allSkillsReducer;