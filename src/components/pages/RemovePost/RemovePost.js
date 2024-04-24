import { useDispatch } from "react-redux";
import { removePost } from "../../../redux/postsRedux";
import { Button } from "react-bootstrap";


const RemovePost = ({ id }) => {

  const dispatch = useDispatch();

  const handleRemovePost = () => {
    dispatch(removePost(id));
  };

  return(
    <Button onClick={handleRemovePost} variant="outline-danger">Delete</Button>
  );
};

export default RemovePost;