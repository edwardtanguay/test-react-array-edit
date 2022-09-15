import { useState } from 'react'
import './App.css'

const _initialMaterials = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

function App() {
  const [materials, setMaterials] = useState(_initialMaterials);

  const handleMaterialChange = (arr, e, i) => {
    const newValue = e.target.value;
    const _materials = [...arr];
    _materials[i] = newValue;
    setMaterials(_materials);
  }

  return (
    <div className="App">
    <h1>Test Array edit</h1>

      {materials.map((material, i) => {
        return (
          <div key={i}><input value={materials[i]} onChange={ (e) => handleMaterialChange(materials, e,i)} /></div>
        )
      })}

      <hr/>
      {materials.map((material, i) => {
        return (
          <div key={i}>{material}</div>
        )
      })}


    </div>
  )
}

export default App
