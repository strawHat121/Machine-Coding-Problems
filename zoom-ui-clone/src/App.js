import { Fragment } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Users from "./components/Users";

const users = [
  { name: "John", mute: false, id: 1 },
  { name: "Jane", mute: false, id: 2 },
  { name: "Joe", mute: false, id: 3 },
  { name: "Jack", mute: false, id: 4 },
  { name: "Jill", mute: false, id: 5 },
  { name: "Juan", mute: false, id: 6 },
  { name: "Juanita", mute: false, id: 7 },
  { name: "Julie", mute: false, id: 8 },
  { name: "Jilluana", mute: false, id: 9 },
  { name: "Jillian", mute: false, id: 10 },
];

function App() {
  return (
    <Fragment>
      <Navbar />
      <Users users={users} />
    </Fragment>
  );
}

export default App;
