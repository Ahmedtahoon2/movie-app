import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className='not-found page-layout'>
      <div className='container'>
        <h2>404</h2>
        <p>Error! Page not found.</p>
        <Link
          className='btn'
          to={"/"}>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
