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



function* fetchArticle(action) {
    try {
        const message = yield call(api.articleApi, action.data);
        yield put({type: "ARTICLE_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "ARTICLE_FETCH_FAILED", message: e.message});
    }
}



function* article() {
    yield takeEvery("ARTICLE_FETCH_REQUESTED", fetchArticle);

}

function* categories() {
    yield takeEvery("CATEGORIES_FETCH_REQUESTED", fetchCategories);
}
function* fetchVideo(action) {
    try {
        const message = yield call(api.videoApi, action.data);
        yield put({type: "VIDEO_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "VIDEO_FETCH_FAILED", message: e.message});
    }

}function* fetchCategories(action) {
    try {
        const message = yield call(api.categoriesApi, action.data);
        yield put({type: "CATEGORIES_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "CATEGORIES_FETCH_FAILED", message: e.message});
    }

}
function* fetchItVideo(action) {
    try {
        const message = yield call(api.itVideoApi, action.data);
        yield put({type: "IT_VIDEO_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "IT_VIDEO_FETCH_FAILED", message: e.message});
    }

}
function* video() {
    yield takeEvery("VIDEO_FETCH_REQUESTED", fetchVideo);
}
function* itVideo() {
    yield takeEvery("IT_VIDEO_FETCH_REQUESTED", fetchItVideo);
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

function* fetchNews(action) {
    try {
        const message = yield call(api.newsApi, action.data);
        yield put({type: "NEWS_FETCH_SUCCESS", message});
    } catch (e) {
        yield put({type: "NEWS_FETCH_FAILED", message: e.message});
    }
}
function* news() {
    yield takeEvery("NEWS_FETCH_REQUESTED", fetchNews);
}
export default function* root() {
    yield fork(login)
    yield fork(registration)
    yield fork(news)
    yield fork(video)
    yield fork(itVideo)
    yield fork(article)
    yield fork(categories)
}