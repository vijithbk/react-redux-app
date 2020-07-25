import React from 'react';
import { connect } from 'react-redux';

import { articleNews } from './store/actions';
import { bindActionCreators } from 'redux';

import ArticleDisplay from './components/ArticleDisplay'

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.articleNews();
  }

  render() {
    return (
      <React.Fragment>
        <ArticleDisplay adata={this.props.myarticles.articleData} />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    myarticles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    articleNews
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
