import BookNavigation from "../navigation/BookNavigation";

function BookList() {
  return (
    <div style={{ backgroundColor: "red", color: "#FFF", width: "500px" }}>
      <h1> This is BookList Page</h1>
      <BookNavigation />
    </div>
  );
}

export default BookList;
