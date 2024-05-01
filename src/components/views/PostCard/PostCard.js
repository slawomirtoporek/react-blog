import { Col, Card, Button } from 'react-bootstrap';
import dateToStr from '../../../utils/dateToStr';
import { Link } from 'react-router-dom';
import styles from "./PostCard.module.scss";

const PostCard = ({ post }) => {

  return (
    <Col key={post.id} lg={4} md={6} className="mt-3 mb-2">
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
  );
};

export default PostCard;