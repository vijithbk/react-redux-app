import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import movieListReducer from './reducers/movies-list';
import userReducer from './reducers/users';
import thunk from 'redux-thunk';
const middleware = [thunk];

const allReducers = combineReducers({ movies: movieListReducer, users: userReducer });

const initialState = {
    users: [],
    movies: {
        name: "Terminator 2"
    }
}

const store = createStore(allReducers, initialState,
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;