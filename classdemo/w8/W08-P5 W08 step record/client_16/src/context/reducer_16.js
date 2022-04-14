import { CLEAR_ALERT, DISPLAY_ALERT } from './action_16';

const reducer_16 = (state, action) => {
  if(action.type === DISPLAY_ALERT){
      return {
          ...state,
          showAlert: true,
          alertText: 'please provide all values',
          alertType: 'danger'
      }
  }
  if(action.type === CLEAR_ALERT){
      return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: ''
      }
  }

  throw new Error(`no such actions ${action.type}`);
}
export default reducer_16;
