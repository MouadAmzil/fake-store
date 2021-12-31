import { Link } from "react-router-dom";
import "./Error404.css";
function Error404() {
  return (
    <div className="div">
      <h1>404 Error Page #3</h1>
      <p className="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to={`/`} className="more-link">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Error404;
