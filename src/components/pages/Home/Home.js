import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {

  const posts = useSelector(getAllPosts);

  return(
    <section className={styles.posts}>
    <h1>All posts</h1>
     <Row>
      {posts.map(post => (
        <Col key={post.id} lg={4} md={6} className="mt-3 mb-2">
          <Card className="p-3">
            <Card.Title>{post.title}</Card.Title>
            <Card.Text  className="m-0"><span className={styles.headerBold}>Author:</span> {post.author}</Card.Text>
            <Card.Text><span className={styles.headerBold}>Published:</span> {post.publishedDate}</Card.Text>
            <Card.Text>{post.shortDescription}</Card.Text>
            <Link to={`/post/${post.id}`}>
              <Button className={styles.btn} variant="primary" text-muted>Read more</Button>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
   </section>
  );
};

export default Home;