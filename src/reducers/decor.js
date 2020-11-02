const decorReducer = (state = false, action) => {
    switch(action.type){
        case 'DECORATE_ON_OFF':
            return !state;
        default:
            return state;
    }
}

export default decorReducer;