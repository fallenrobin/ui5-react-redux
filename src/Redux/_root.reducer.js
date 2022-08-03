import { combineReducers } from 'redux';
import employeeSkillReducer from './employeeSkillReducer';
import dialogReducer from './dialogReducer';
import editDialogReducer from './editDialogReducer';
import projectReducer from './projectReducer'


const rootReducer = combineReducers({
    employeeSkillReducer, 
    dialogReducer,
    editDialogReducer, 
    projectReducer
});

export default rootReducer;