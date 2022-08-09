function editDialogReducer(state = false, action) {
    switch (action.type) {
        case 'EDIT_DIALOG_OPEN':
            return true;
        case 'EDIT_DIALOG_CLOSE':
            return false;
        default:
            return state;
    }
}

export default editDialogReducer;