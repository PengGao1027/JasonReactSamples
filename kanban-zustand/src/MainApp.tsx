import "./MainApp.css";
import Column from "./components/Column";

function MainApp() {
  return (
    <div className="App">
      <Column myState="PLANNED" />
      <Column myState="ONGOING" />
      <Column myState="DONE" />
    </div>
  );
}

export default MainApp;
