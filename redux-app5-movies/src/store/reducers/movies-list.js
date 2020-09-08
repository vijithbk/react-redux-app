import '../actions/update-movies';
import { UPDATE_MOVIES } from '../actions/update-movies';

const movieListReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UPDATE_MOVIES:
            return { name: payload };

        default:
            return state;
    }
}

export default movieListReducer