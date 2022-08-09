import { Link } from 'react-router-dom';

const Products = () => {
  // const navigate = useNavigate();
  // navigate('/welcome', {replace: true});
  // navigate(-1) go back
  // navigate(1) to go forward
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
