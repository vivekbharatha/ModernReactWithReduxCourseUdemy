import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createPost } from './../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-danger" >{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Create</button>
        <Link className="btn btn-danger margin-left-5" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validating
  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({ validate, form: 'PostsNewForm' })(
  connect(null, { createPost })(PostsNew)
);
