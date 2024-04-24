import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getElementById } from "../../../redux/postsRedux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import styles from "./Post.module.scss";
import RemovePost from "../RemovePost/RemovePost";

const Post = () => {

  const { id } = useParams();

  const posts = useSelector(state => getElementById(state, id));

  if(!posts) {
    return <Navigate to="/" />
  } else return(
    <Row>
        <>
          <Col lg={7} md={9} className="mt-3 mb-2 d-flex flex-column align-items-center">
            <div className={`d-flex flex-column align-items-start ${styles.boxPosts}`}>
              <Card.Title className="fs-2 mb-3">{posts.title}</Card.Title>
              <Card.Text className="m-0"><span className={styles.headerBold}>Author:</span> {posts.author}</Card.Text>
              <Card.Text><span className={styles.headerBold}>Published:</span> {posts.publishedDate}</Card.Text>
              <Card.Text>{posts.content}</Card.Text>
            </div>
          </Col>
          <Col lg={5} md={3} className="mt-3 mb-2">
            <Link to={`/post/edit/${posts.id}`}>
              <Button variant="outline-primary" className="me-2">Edit</Button>
            </Link>
            <Link>
              <RemovePost id={posts.id} />
            </Link>
          </Col>
        </>
    </Row>
  );
};

export default Post;