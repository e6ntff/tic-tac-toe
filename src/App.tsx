import React, { useState } from 'react';
import './App.scss';
import Grid from './components/Grid';

const App: React.FC = () => {
	const [symbol, setSymbol] = useState<string>(
		['×', '○'][Math.floor(Math.random() * 2)]
	);

	return (
		<div className='w-full h-full flex justify-center items-center bg-blue-50'>
			<Grid
				symbol={symbol}
				setSymbol={setSymbol}
			/>
		</div>
	);
};

export default App;
