import React, { useCallback, useState } from 'react';
import './App.scss';
import Grid from './components/Grid';
import Panel from './components/Panel';

const App: React.FC = () => {
	const symbols = ['×', '○'];

	const [symbol, setSymbol] = useState<string>(
		symbols[Math.floor(Math.random() * 2)]
	);

	const [values, setValues] = useState<string[]>([
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	]);

	const [isAllCellsInactive, setIsAllCellsInactive] = useState<boolean>(false);

	const isGameEnded = useCallback((values: string[]) => {
		if (!values.includes('')) return true;
		if (
			(values[0] === values[1] &&
				values[1] === values[2] &&
				values[0] !== '') ||
			(values[3] === values[4] &&
				values[4] === values[5] &&
				values[3] !== '') ||
			(values[6] === values[7] &&
				values[7] === values[8] &&
				values[6] !== '') ||
			(values[0] === values[3] &&
				values[3] === values[6] &&
				values[0] !== '') ||
			(values[1] === values[4] &&
				values[4] === values[7] &&
				values[1] !== '') ||
			(values[2] === values[5] &&
				values[5] === values[8] &&
				values[2] !== '') ||
			(values[0] === values[4] &&
				values[4] === values[8] &&
				values[0] !== '') ||
			(values[2] === values[4] && values[4] === values[6] && values[2] !== '')
		) {
			return true;
		}
		return false;
	}, []);

	const resetGame = () => {
		setValues(['', '', '', '', '', '', '', '', '']);
		setIsAllCellsInactive(false);
	};

	const endGame = () => {
		setIsAllCellsInactive(true);
		setTimeout(() => {
			resetGame();
		}, 1500);
	};

	return (
		<div className='w-full h-full flex justify-center items-center bg-blue-50 flex-col gap-2'>
			<Panel symbol={symbol} isAllCellsInactive={isAllCellsInactive}/>
			<Grid
				values={values}
				setValues={setValues}
				symbol={symbol}
				setSymbol={setSymbol}
				isGameEnded={isGameEnded}
				endGame={endGame}
				isAllCellsInactive={isAllCellsInactive}
			/>
		</div>
	);
};

export default App;
