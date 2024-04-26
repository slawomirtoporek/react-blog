import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";


const AddPostForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmitAddPost = post => {
    dispatch(addPost(post));
    navigate('/');
  }

  return (
    <PostForm action={handleSubmitAddPost} actionText="Add post" />
  );
};

export default AddPostForm;