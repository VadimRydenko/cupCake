import { SET_CURRENT_TAB } from './const';


export const setCurrentTab = ({ currentTab }) => ({
  type: SET_CURRENT_TAB,
  payload: currentTab,
});
