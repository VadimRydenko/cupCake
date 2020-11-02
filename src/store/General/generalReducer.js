import { SET_CURRENT_TAB } from './const';

const initialState = {
  currentTab: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };
    default: return state;
  }
};

export default authReducer;
