import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostyByCategory } from "../../../redux/postsRedux";
import { Row } from "react-bootstrap";
import PostCard from "../../views/PostCard/PostCard";

const Category = () => {

  const { name } = useParams();
  const selectedPost = useSelector(state => getPostyByCategory(state, name));

  if(selectedPost.length === 0) {
    return (
      <>
        <h1 className="fs-3 mb-4">Category: {name}</h1>
        <p>No posts in this category...</p>
      </>
    )
  } else { 
    return (
      <Row>
        <h1 className="fs-3 mb-4">Category: {name}</h1>
        {selectedPost.map(post => (
          <PostCard post={post} />
        ))}
      </Row>
    );
  };
}
export default Category;