import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { user, password } = payload;
    const response = yield call(api.post, '/sessions', {
      user,
      password,
    });
    const { token, dados } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(loginSuccess(token, dados));
    const { nivel } = dados;

    switch (nivel) {
      case 0:
        history.push('/desafio-1');
        break;

      case 1:
        history.push('/desafio-2');
        break;

      case 2:
        history.push('/desafio-3');
        break;

      case 3:
        history.push('/desafio-4');
        break;

      case 4:
        history.push('/desafio-5');
        break;

      case 5:
        history.push('/desafio-6');
        break;

      case 6:
        history.push('/final');
        break;

      default:
    }
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(loginFailure());
  }
}
export function* createUser({ payload }) {
  try {
    const { name, phone2, type, size, password, user } = payload.data;

    const phone = parseInt(phone2, 0);
    const admin = false;

    yield call(api.post, 'users', {
      name,
      phone,
      type,
      size,
      password,
      user,
      admin,
    });

    history.push('/login');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados !');

    yield put(loginFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/CREATE_USER_REQUEST', createUser),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
