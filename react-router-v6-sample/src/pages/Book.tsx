import { useState } from "react";
import { useParams } from "react-router-dom";

function Book() {
  // useParams is important to receive the parameter from parent router
  const { id } = useParams();
  // const obj: any = useOutletContext();
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <div>This is Book {id} Page </div>
      {/* <div>This is Hello {obj.hello} </div> */}
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default Book;
