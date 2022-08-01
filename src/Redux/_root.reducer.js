import { combineReducers } from 'redux';
import skillReducer from './SkillReducer';
import dialogReducer from './dialogReducer';
import editDialogReducer from './editDialogReducer'


const rootReducer = combineReducers({
    skillReducer, 
    dialogReducer,
    editDialogReducer
});

export default rootReducer;