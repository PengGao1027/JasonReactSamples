import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const myNavFunction = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      myNavFunction("/", {});
      // myNavFunction(-1);
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      NotFound
      {/* <Navigate to="/" /> */}
    </div>
  );
}

export default NotFound;
