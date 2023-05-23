import "./MainApp.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BookRoutes from "./routers/BookRoutes";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/books" element={<h1>Extra Contents</h1>}></Route>
      </Routes> */}
      <nav>
        <ul>
          <li>
            <Link to={"/"} replace reloadDocument>
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to={"/books"}>BookList</Link>{" "}
          </li>
          <li>
            <Link state={true} to={"/about"}>
              About
            </Link>{" "}
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to={"/contact"}
            >
              Contact
            </NavLink>{" "}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
