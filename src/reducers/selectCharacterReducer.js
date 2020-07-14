export default (state = null, action) => {
    switch (action.type) {
        case 'CHARACTER_SELECTED':
            return action.payload;
        default:
            return state;
    }
} 