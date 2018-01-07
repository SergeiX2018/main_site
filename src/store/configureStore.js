import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import createSagaMiddleware,{END} from 'redux-saga'

const configureStore = initialState => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                createLogger(),
                sagaMiddleware,
            ),
        )
    )
    store.runSaga = sagaMiddleware.run;
    store.close = ()=>store.dispatch(END)
    return store
}

export default configureStore
