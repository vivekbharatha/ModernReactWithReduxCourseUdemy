import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getPost } from './../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h3>{ post.title }</h3>
        <h6>{ post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  console.log(posts);
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost })(PostsShow);
