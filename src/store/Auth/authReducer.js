import { SIGNIN } from './const';

const initialState = {
  logIn: false,
};

const authReducer = (state = initialState, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case SIGNIN:
      return { ...state, 
        logIn: true,
      };
    default: return state;
  }
};

export default authReducer;
