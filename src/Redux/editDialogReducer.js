function editDialogReducer(state = false, action) {
    switch (action.type) {
        case 'EDIT_DIALOG_OPEN':
            return true;
        case 'OPEN_DIALOG':
            return false;
        default:
            return state;
    }
}

export default editDialogReducer;