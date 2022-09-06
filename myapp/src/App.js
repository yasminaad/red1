import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./component/AddTask";
import ListTask from "./component/ListTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;