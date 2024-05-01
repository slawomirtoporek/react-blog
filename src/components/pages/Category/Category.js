import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostyByCategory } from "../../../redux/postsRedux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";
import styles from "./Category.module.scss";

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
          <Col key={post.id} lg={4} md={6} className="mb-3">
            <Card className="p-3">
              <Card.Title className="fs-5">{post.title}</Card.Title>
              <Card.Text  className="m-0"><span className={styles.headerBold}>Author:</span> {post.author}</Card.Text>
              <Card.Text className="m-0"><span className={styles.headerBold}>Published:</span> {dateToStr(post.publishedDate)}</Card.Text>
              <Card.Text><span className={styles.headerBold}>Category:</span> {post.category}</Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Link to={`/post/${post.id}`}>
                <Button className={styles.btn} variant="primary">Read more</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
}
export default Category;