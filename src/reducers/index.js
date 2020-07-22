import {combineReducers} from 'redux';

import selectCharacterReducer from './selectCharacterReducer';
import getTokenReducer from './getTokenReducer';
import getRealmsReducer from './getRealmsReducer';

export default combineReducers({
    selectedCharacter: selectCharacterReducer,
    currentToken: getTokenReducer,
    allRealms: getRealmsReducer
})