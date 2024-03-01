/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ErrorFallback.css";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='error-page page-layout'>
      <div className='container'>
        <h1>Error!! 🌍</h1>
        <p>{error.message}</p>
        <Link
          className='btn'
          to={"/"}
          onClick={resetErrorBoundary}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
