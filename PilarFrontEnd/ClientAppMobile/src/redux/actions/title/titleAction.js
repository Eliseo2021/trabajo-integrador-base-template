import { APP_TITLE } from '../../constants';

export const setTitle = title => {
  return dispatch => {
    dispatch({
      type: APP_TITLE,
      payload: title
    });
  }
}