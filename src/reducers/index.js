import counterReducer from './counter';
import loggedReducer from './isLogged';
import showBox from './showBox';
import colors from './color';
import users from './users';
import decorates from './decor';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    opener: showBox,
    colored: colors,
    user:users,
    decor:decorates,
    
});

export default allReducers;