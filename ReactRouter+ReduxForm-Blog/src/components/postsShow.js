import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getPost, deletePost } from './../actions';

class PostsShow extends Component {

  componentDidMount() {
    if (!this.props.posts) {
      const { id } = this.props.match.params;
      this.props.getPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Digging.....</div>
    }
    return (
      <div>
        <Link to="/">Posts</Link>
        <div className="text-right">
          <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)} >Delete Post</button>
        </div>
        <h3>{ post.title }</h3>
        <h6>{ post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);
