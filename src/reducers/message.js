import * as types from '../constants/ActionType'
import * as Message from '../constants/Message'

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    let {message} = action;
    switch(action.type){
        case types.CHANGE_MESSAGE:
            state = message;
            return state;
        default: return state;
    }
}

export default message;