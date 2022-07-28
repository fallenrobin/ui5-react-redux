import { combineReducers } from 'redux';
import skillReducer from './SkillReducer';
import dialogReducer from './dialogReducer';


const rootReducer = combineReducers({
    skillReducer, 
    dialogReducer
});

export default rootReducer;