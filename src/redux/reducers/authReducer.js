import Types from '../types';

const initialState = {
  activeStep: 'email',
  email: '',
  code: '',
  token: '',
  error: null,
  loadingEmail: false,
  loadingCode: false,
  loadingLogout: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CODE.REQUEST: {
      return {
        ...state,
        email: action.email,
        loadingEmail: true,
      };
    }
    case Types.GET_CODE.SUCCESS: {
      return {
        ...state,
        activeStep: 'code',
        loadingEmail: false,
      };
    }
    case Types.GET_CODE.FAILURE: {
      return {
        ...state,
        error: action.error,
        loadingEmail: false,
      };
    }
    case Types.LOGIN.REQUEST: {
      return {
        ...state,
        email: action.email,
        code: action.code,
        loadingCode: true,
      };
    }
    case Types.LOGIN.SUCCESS: {
      return {
        ...state,
        token: action.token,
        loadingCode: false,
      };
    }
    case Types.LOGIN.FAILURE: {
      return {
        ...state,
        error: action.error,
        loadingCode: false,
      };
    }
    case Types.SET_TOKEN.SUCCESS: {
      return {
        ...state,
        token: action.token,
        loadingCode: false,
      };
    }
    case Types.LOGOUT.REQUEST: {
      return {
        ...state,
        loadingLogout: true,
      };
    }
    case Types.LOGOUT.SUCCESS: {
      return {
        ...initialState,
        loadingLogout: false,
      };
    }
    case Types.LOGOUT.FAILURE: {
      return {
        ...state,
        error: action.error,
        loadingLogout: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
