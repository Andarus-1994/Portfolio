var initialState
if(localStorage.getItem('color')){
initialState=localStorage.getItem('color')
}
else{
 initialState ='rgb(80, 147, 185)';
}

const changeColor = (state = initialState, action) =>{

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