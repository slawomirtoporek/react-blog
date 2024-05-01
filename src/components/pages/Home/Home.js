import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PostCard from "../../views/PostCard/PostCard";

const Home = () => {

  const posts = useSelector(getAllPosts);
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate("/post/add");
  }

  return(
    <section className={styles.posts}>
      <div className="d-flex justify-content-between mb-2">
        <h1 className="fs-3">All posts</h1>
        <Button onClick={handleAddPost} variant="outline-primary" size="md">Add post</Button>
      </div>
      <Row>
        {posts.map(post => (
          <PostCard post={post} />
        ))}
      </Row>
   </section>
  );
};

export default Home;