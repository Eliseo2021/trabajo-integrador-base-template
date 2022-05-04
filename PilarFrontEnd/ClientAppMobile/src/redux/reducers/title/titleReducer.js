import { APP_TITLE } from '../../constants';

const stateInitial = {
  title: "Stadiums",
};

export const titleReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case APP_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
