import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getPosts } from './../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { getPosts })(Posts);
