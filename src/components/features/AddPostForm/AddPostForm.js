import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = e => {
    e.preventDefault();
    dispatch(addPost({ title, shortDescription, content, publishedDate, author }));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
  }

  return (
    <Form onSubmit={handleAddPost}>
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
      <Button variant="primary" type="submit">Add post</Button>
    </Form>
  );
};

export default AddPostForm;