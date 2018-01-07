import *as api from './../services/api'
import { call, put, takeEvery, takeLatest,fork } from 'redux-saga/effects'
function* fetchLogin(action) {
    try {
        const message = yield call(api.loginApi, action.data);
        yield put({type: "LOGIN_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "LOGIN_FETCH_FAILED", message: e.message});
    }
}
function* login() {
    yield takeEvery("LOGIN_FETCH_REQUESTED", fetchLogin);
}
function* fetchRegistration(action) {
    try {
        const message = yield call(api.registrationApi, action.data);
        yield put({type: "REGISTRATION_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "REGISTRATION_FETCH_FAILED", message: e.message});
    }
}
function* registration() {
    yield takeEvery("REGISTRATION_FETCH_REQUESTED", fetchRegistration);
}

function* registration() {
    yield takeEvery("REGISTRATION_FETCH_REQUESTED", fetchRegistration);
}
function* news() {
    yield takeEvery("NEWS_FETCH_REQUESTED", fetchNews);
}
export default function* root() {
    yield fork(login)
    yield fork(registration)
    yield fork(news)
}