import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error,setError]=useState(false);
  return (
    <div>
      <section className="container">
        <h3>Hex Color Genrator </h3>
        <form>
          <input
            type="text"
            placeholder="type color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error":null}`}
          />
          <button  className="btn" type="submit">Get Colors</button>
        </form>
      </section>
    </div>
  );
}

export default App;
