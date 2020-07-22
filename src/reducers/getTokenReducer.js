export default (state = null, action) => {
    switch (action.type) {
        case 'RECEIVE_TOKEN':
            return action.payload;
        default:
            return state;
    }
}