// Category Actions
const SET_CATEGORIES = 'SET_CATEGORIES';

const _setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    categories
  };
};

export const setCategories = () => {
  return async dispatch => {
    const response = await axios.get('/api/categories');
    return dispatch(_setCategories(response.data));
  };
};

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
  }
  return state;
};
