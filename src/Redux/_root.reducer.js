import { combineReducers } from 'redux';
import employeeSkillReducer from './employeeSkillReducer';
import dialogReducer from './dialogReducer';
import editDialogReducer from './editDialogReducer';
import projectReducer from './projectReducer';
import allSkillsReducer from './allSkillsReducer'


const rootReducer = combineReducers({
    employeeSkillReducer, 
    dialogReducer,
    editDialogReducer, 
    projectReducer, 
    allSkillsReducer
});

export default rootReducer;