import { useState } from 'react';
import './App.css';

const _intitialItem = {
	title: 'Warehouse 002',
	materials: ['pipes', 'plastic', 'metal', 'sand']
};

function App() {
	const [item, setItem] = useState(_intitialItem);

	const handleMaterialChange = (currentItem, e, i) => {
		const newValue = e.target.value;
		const _item = { ...currentItem };
		_item.materials[i] = newValue;
		setItem(_item);
	};

	return (
		<div className="App">
			<h1>{item.title}</h1>

			{item.materials.map((material, i) => {
				return (
					<div key={i}>
						<input
							value={material}
							onChange={(e) => handleMaterialChange(item, e, i)}
						/>
					</div>
				);
			})}

			<hr />
			{item.materials.map((material, i) => {
				return (
					<p className="material" key={i}>
						{material}
					</p>
				);
			})}
		</div>
	);
}

export default App;
