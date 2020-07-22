export default (state = null, action) => {
    switch (action.type) {
        case 'GET_REALMS':
            return action.payload;
        default:
            return state;
    }
} 