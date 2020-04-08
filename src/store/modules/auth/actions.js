export function loginRequest(user, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { user, password },
  };
}
export function loginSuccess(token, dados) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, dados },
  };
}
export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}
export function createUserRequest(data) {
  return {
    type: '@auth/CREATE_USER_REQUEST',
    payload: { data },
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
