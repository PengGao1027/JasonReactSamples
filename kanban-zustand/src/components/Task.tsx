import classNames from "classnames";
import "./Task.css";

interface MyTaskObject {
  title: string;
}

const STATUS = "DONE";

function Task(myTaskObject: MyTaskObject) {
  return (
    <div className="task">
      <div>{myTaskObject.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
}

export default Task;
