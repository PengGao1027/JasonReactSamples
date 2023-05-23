import { Route, Routes } from "react-router-dom";
import BookList from "../pages/BookList";
import Book from "../pages/Book";
import NewBook from "../pages/NewBook";

function BookRoutes() {
  return (
    <Routes>
      <Route index element={<BookList />} />
      <Route path="new" element={<NewBook />} />
      <Route path=":id" element={<Book />} />
    </Routes>
  );
}

export default BookRoutes;
