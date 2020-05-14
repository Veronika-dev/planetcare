import Types from '../types';

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_DATA.SUCCESS: {
      return {
        ...state,
        userData: action.userData,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
