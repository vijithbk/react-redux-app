import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import updateMovies from './store/actions/update-movies';


function App(props) {
  return (
    <div className="App">
      REDUX MOVIELIST APP
      <br />
      <span
        style={{ color: 'green' }}
      >YOUR CURRENT MOVIE IS: </span>{props.movies.name}
      <br />
      <button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
    </div >
  );
};

const MapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies)
  }
};
export default connect(MapStateToProps, MapDispatchToProps)(App);