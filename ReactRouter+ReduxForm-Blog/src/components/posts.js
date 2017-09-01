import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from './../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        List of posts
      </div>
    );
  }
}

export default connect(null, { getPosts })(Posts);
