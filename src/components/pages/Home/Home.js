import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

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
          <Col key={post.id} lg={4} md={6} className="mt-3 mb-2">
            <Card className="p-3">
              <Card.Title className="fs-5">{post.title}</Card.Title>
              <Card.Text  className="m-0"><span className={styles.headerBold}>Author:</span> {post.author}</Card.Text>
              <Card.Text><span className={styles.headerBold}>Published:</span> {dateToStr(post.publishedDate)}</Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Link to={`/post/${post.id}`}>
                <Button className={styles.btn} variant="primary">Read more</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
   </section>
  );
};

export default Home;