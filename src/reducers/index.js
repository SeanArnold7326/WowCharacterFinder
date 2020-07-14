const selectedCharacterReducer = (selectedCharacter = null, action) => {
    if (action.type === 'CHARACTER_SELECTED') {
        return action.payload;
    }

    return selectedCharacter;
} 

export default selectedCharacterReducer;