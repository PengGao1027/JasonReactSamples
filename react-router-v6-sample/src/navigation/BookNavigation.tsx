import { Link } from "react-router-dom";

function BookNavigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/books/1">
            <h2>Book 1</h2>
          </Link>
        </li>
        <li>
          <Link to="/books/2">
            <h2>Book 2</h2>
          </Link>
        </li>
        <li>
          <Link to="/books/new">
            <h2>New Book</h2>
          </Link>
        </li>
      </ul>
      {/* <Outlet context={{ hello: "world" }} /> */}
    </>
  );
}

export default BookNavigation;
