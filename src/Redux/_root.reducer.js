import { combineReducers } from 'redux';
import skillReducer from './SkillReducer';
import dialogReducer from './dialogReducer';
import tabReducer from './TabReducer'

const rootReducer = combineReducers({
    skillReducer, 
    dialogReducer, 
    tabReducer
});

export default rootReducer;