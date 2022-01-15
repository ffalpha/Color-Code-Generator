import { useState } from "react";
import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error,setError]=useState(false);
  const [list,setList]=useState(new Values("#FF7777").all(10))

  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
      let colors=new Values(color).all(20)
      setList(colors)
      console.log(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }
  };
  return (
    <div>
      <section className="container">
        <h3>Hex Color Genrator </h3>
        <form onSubmit={handleSubmit}>
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
      <section></section>
    </div>
  );
}

export default App;
