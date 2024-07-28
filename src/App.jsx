import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Card from "./Components/Card";

function App() {
  const [login, setLogin] = useState(true);

  return <>{login ? <Login setLogin={setLogin} /> : <Card />}</>;
}

export default App;
