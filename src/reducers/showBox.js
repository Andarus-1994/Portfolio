const showBox = (state=false, action) =>{

    switch(action.type){
        case 'PRESS_BUTTON':
            return !state;
        default: 
            return state;
    }
}

export default showBox;