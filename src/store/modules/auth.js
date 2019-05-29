import { setToken } from '../../api/helpers';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
// export const SIGNUP_PROCESSING = 'SIGNUP_PROCESSING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_PROCESSING = 'LOGIN_PROCESSING';
export const REQUEST_PROCESSING = 'LOGIN_PROCESSING';

const initialState = {
  isLoading: false,
  errors: [],
};

const signupSuccess = () => ({
  SIGNUP_SUCCESS,
});
const signupFailure = () => ({
  SIGNUP_SUCCESS,
});
const loginSuccess = () => ({
  LOGIN_SUCCESS,
});
const loginFailure = () => ({
  LOGIN_FAILURE,
});
const requestProcessing = () => ({
  SIGNUP_SUCCESS,
});

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const { data } = await loginRequest(userData);
      localStorage.setItem(
        'authenticatedUser',
        JSON.stringify(data.data.authenticatedUser),
      );
      setToken(data.data.token);
      dispatch(loginSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(loginFailure([data]));
    }
  };
};

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const { data } = await signUpRequest(userData);
      dispatch(signupSuccess(data));
    } catch (error) {
      const { data } = error.response;
      dispatch(signupFailure([data]));
    }
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROCESSING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorResponse: [],
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
  }
};
