import { combineReducers } from 'redux';
import skillReducer from './SkillReducer';
import dialogReducer from './dialogReducer';
import editDialogReducer from './editDialogReducer';
import projectReducer from './projectReducer'


const rootReducer = combineReducers({
    skillReducer, 
    dialogReducer,
    editDialogReducer, 
    projectReducer
});

export default rootReducer;