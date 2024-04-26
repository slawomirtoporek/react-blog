import { useDispatch } from "react-redux";
import { removePost } from "../../../redux/postsRedux";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";


const RemovePost = ({ id }) => {

  const [show, setShow] = useState(false);

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const dispatch = useDispatch();

  const handleRemovePost = () => {
    dispatch(removePost(id));
    handleCloseModal();
  };

  return(
    <>
      <Button onClick={handleShowModal} variant="outline-danger">Delete</Button>
      <Modal show={show} onClick={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The operation will completly remove this post from the app. Are you sure you want to do that?</p>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemovePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemovePost;