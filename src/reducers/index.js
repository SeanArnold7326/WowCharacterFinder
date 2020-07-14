import {combineReducers} from 'redux';

import selectCharacterReducer from './selectCharacterReducer';

export default combineReducers({
    selectedCharacter: selectCharacterReducer
})