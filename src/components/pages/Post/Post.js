import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getElementById } from "../../../redux/postsRedux";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import styles from "./Post.module.scss";
import RemovePost from "../RemovePost/RemovePost";
import dateToStr from "../../../utils/dateToStr";

const Post = () => {

  const { id } = useParams();

  const posts = useSelector(state => getElementById(state, id));

  if(!posts) {
    return <Navigate to="/" />
  } else return(
    <Container>
      <Row>
          <Col lg={7} md={9} className="mt-3 mb-2 d-flex flex-column align-items-center">
            <div className={`d-flex flex-column align-items-start ${styles.boxPosts}`}>
              <Card.Title className="fs-3 mb-3">{posts.title}</Card.Title>
              <Card.Text className="m-0"><span className={styles.headerBold}>Author:</span> {posts.author}</Card.Text>
              <Card.Text><span className={styles.headerBold}>Published:</span> {dateToStr(posts.publishedDate)}</Card.Text>
              <Card.Text dangerouslySetInnerHTML={{ __html: posts.content }} />
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
      </Row>
    </Container>
  );
};

export default Post;