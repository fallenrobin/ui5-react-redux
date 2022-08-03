const initialState = [
    {
        projectName: 'Novacure',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }, 
    {
        projectName: 'Cargill',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }, 
    {
        projectName: 'Target',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }, 
    {
        projectName: 'Best Buy',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }, 
    {
        projectName: 'Wells Fargo',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }, 
    {
        projectName: 'Sun Country',
        startDate: '1/01/2020',
        endDate: '7/01/2020',
        teamMembers:
            [
                { name: 'The Hamburgler' },
                { name: 'Grimace' },
                { name: 'Birdie' },
                { name: 'Mac Tonight' }
            ],
        technologies:
            [
                { technologyName: 'React' },
                { technologyName: 'PostreSQL' },
                { technologyName: 'Figma' },
                { technologyName: 'OData' },
            ],
        notes: [
            { note: 'Grimace was redesigned, going from two pairs of arms to the single pair he has today. Grimace s role continued to grow, and by the mid-1970s, he was a major character in McDonaldland.' },
            { note: 'The Hamburglar was a pint-sized burglar who in debut in 1971 and was one of the first villains on the commercials.' }
        ]
    }
]

function projectReducer(state = initialState, action) {
    switch (action.type) {

        // case :
        //     return { ...state}

        default:
            return state
    }
}


export default projectReducer;