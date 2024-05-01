import { ListGroup } from "react-bootstrap";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {

  const categories = useSelector(getAllCategories);
  
  return (
    <div className="w-75 mx-auto">
      <h1 className="mb-4 fs-3">All categories</h1>
      <ListGroup>
        {categories.map(category => 
          (<ListGroup.Item>
            <Link to={`/category/${category.name}`}>
              {category.name}
            </Link>
          </ListGroup.Item>)
        )}
      </ListGroup>
    </div>
  );
};

export default Categories; 
