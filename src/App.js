import "./styles.css";
import { useState } from "react";
const arr = [
  { name: "Rakshit", class: "First", app: "developer", check: false },
  { name: "bhnau", class: "last", app: "developer", check: false },
  { name: "geeta", class: "Second", app: "developer", check: false },
  { name: "girver", class: "last", app: "developer", check: false }
];

export default function App() {
  const [name, setname] = useState(arr);
  const [search, setsearh] = useState("");
  const handle = (change) => {
    const up = arr.filter((elem) => {
      if (elem.class === change) {
        return (elem.check = !elem.check);
      }
    });
    setname(up);
    console.log(arr);
  };
  const handlebutton = (id) => {
    const updated = arr.filter((elem) => {
      return elem.name.includes(id);
    });
    setname(updated);
  };
  return (
    <div className="App">
      <h1>Hello Rakshit</h1>
      {arr.map((elem) => {
        return (
          <div>
            {elem.check ? elem.name : null}
            {elem.check ? "->" + elem.app : null}
          </div>
        );
      })}
      <input type="checkbox" onChange={() => handle("First")} />f
      <input type="checkbox" onChange={() => handle("last")} />L
      <input type="checkbox" onChange={() => handle("Second")} />S
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setsearh(event.target.value);
        }}
      />
      <button onClick={() => handlebutton(search)}>Add</button>
    </div>
  );
}
