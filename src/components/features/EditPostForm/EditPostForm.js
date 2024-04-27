import { useDispatch, useSelector } from "react-redux";
import { getElementById } from "../../../redux/postsRedux";
import { useParams, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state) => getElementById(state, id));
  const navigate = useNavigate();

  const handleSubmitEditPost = posts => {
    dispatch(editPost({ ...posts, id }));
    navigate('/');
  };

  if(!posts) {
    return <Navigate to="/" />
  } else return(
    <PostForm 
      action={handleSubmitEditPost} 
      actionText="Edit post"
      {...posts}
    />
  );
};

export default EditPostForm;