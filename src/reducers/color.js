const changeColor = (state='rgb(80, 147, 185)', action) =>{

    switch(action.type){
        case 'CHANGE_COLOR_DARK':
            return state='rgb(59, 120, 155)';
        case 'CHANGE_COLOR_LIGHT':
            return state='rgb(80, 147, 185)';
        default: 
            return state;
    }
}

export default changeColor;