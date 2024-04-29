import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date() || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
 

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, shortDescription, content, publishedDate, author });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-50" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
          value={title} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" 
          value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="publishedDate">
        <Form.Label>Published</Form.Label>
        <DatePicker placeholder="Enter date" selected={publishedDate} 
          onChange={(date) => setPublishedDate(date)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" 
          value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mainContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill placeholder="Main content" theme="snow" value={content} onChange={setContent} />
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