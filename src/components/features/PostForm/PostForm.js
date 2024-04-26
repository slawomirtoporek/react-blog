import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
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
      <Form.Group className="mb-3  w-50" controlId="publishedDate">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Enter date" 
          value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" 
          value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mainContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Main content" 
          value={content} onChange={(e) => setContent(e.target.value)} />
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