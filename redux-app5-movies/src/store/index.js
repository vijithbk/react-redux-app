import { createStore, combineReducers } from 'redux';
import movieListReducer from './reducers/movies-list';

const reducer = combineReducers({ movies: movieListReducer });

const initialState = {
    movies: {
        name: "Terminator 2"
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;