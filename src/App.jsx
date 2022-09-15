import { useState } from 'react'
import './App.css'

const _intitialItem = {
  title: "the test",
  materials: ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
};

function App() {
  const [item, setItem] = useState(_intitialItem);

  const handleMaterialChange = (currentItem, e, i) => {
    const newValue = e.target.value;
    const _item = {
      ...currentItem, materials: ['sfdjk']
    };
    setItem(_item);
  }

  return (
    <div className="App">
    <h1>Test Array edit</h1>

      {item.materials.map((material, i) => {
        return (
          <div key={i}><input value={item.materials[i]} onChange={ (e) => handleMaterialChange(item, e,i)} /></div>
        )
      })}

      <hr/>
      {item.materials.map((material, i) => {
        return (
          <div key={i}>{material}</div>
        )
      })}


    </div>
  )
}

export default App
