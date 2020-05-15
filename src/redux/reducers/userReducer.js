import Types from '../types';

const initialState = {
  userData: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_DATA.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_USER_DATA.SUCCESS: {
      return {
        ...state,
        userData: action.userData,
        loading: false,
      };
    }
    case Types.GET_USER_DATA.FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case Types.LOGOUT.SUCCESS: {
      return {
        ...initialState,
      };
    }
    case Types.UPDATE_USER_DATA.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.UPDATE_USER_DATA.SUCCESS: {
      return {
        ...state,
        userData: action.userData,
        loading: false,
      };
    }
    case Types.UPDATE_USER_DATA.FAILURE: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
