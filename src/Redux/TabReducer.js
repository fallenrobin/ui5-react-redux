function tabReducer(state = '', action) {
    switch (action.type) {
        case 'HOME':
            state = action.payload;
            return state
        case 'CHART':
            console.log('tab reducer shows:', state);
            state = action.payload;
            return state
        case 'PROJECTS':
            state = action.payload;
            return state
        default:
            return state
    }
}


export default tabReducer;
