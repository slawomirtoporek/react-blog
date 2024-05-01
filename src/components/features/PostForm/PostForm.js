import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import styles from './PostForm.module.scss';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date() || '');
  const [category, setCategory] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, serCategoryError] = useState(false);
  const categories = useSelector(getAllCategories);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = e => {
    setContentError(!content)
    setDateError(!publishedDate)
    serCategoryError(!category);
    if(content && publishedDate && category) {
      action({ title, shortDescription, content, publishedDate, author, category });
    };
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3 w-50" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" placeholder="Enter title"
        />
        {errors.title && 
          <small className="d-block form-text text-danger mt-2">
            This field is required
          </small>}
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text" placeholder="Enter author" 
        />
        {errors.author && 
          <small className="d-block form-text text-danger mt-2">
            Title is too short (min is 3)
          </small>}
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="publishedDate">
        <Form.Label>Published</Form.Label>
        <DatePicker
          selected={publishedDate} 
          onChange={(date) => setPublishedDate(date)}
          placeholder="Enter date"
          className={styles.datePicker}
          />
          {dateError && 
            <small className="d-block form-text text-danger mt-2">
              Published can't be empty
            </small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select
          value={category}
          onChange={e => setCategory(e.target.value)}
          >
          <option value="default">Select category...</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))};
        </Form.Select>
        {categoryError && 
          <small className="d-block form-text text-danger mt-2">
            Category can't be empty
          </small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
        {...register("shortDescription", { required: true, minLength: 20 })}
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
        as="textarea" rows={3} placeholder="Leave a comment here" 
        />
        {errors.shortDescription && 
          <small className="d-block form-text text-danger mt-2">
            Short description is too short (min is 20)
          </small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="mainContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill 
          value={content}
          onChange={setContent} 
          placeholder="Main content" theme="snow"
          className={styles.content}
        />
        {contentError && 
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>}
      </Form.Group>
      <Button variant="primary" type="submit">{ actionText }</Button>
    </Form>
  );
};

PostForm.prototypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};

export default PostForm;