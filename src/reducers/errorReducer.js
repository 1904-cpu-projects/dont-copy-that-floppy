// Catch Errors
const CATCH_ERROR = 'CATCH_ERROR';

export const _catchError = error => {
  return {
    type: CATCH_ERROR,
    error
  };
};

export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case CATCH_ERROR:
      return action.error;
  }
  return state;
};
