import React from 'react';
import Cell from './Cell';

interface Props {
	values: string[];
	setValues: any;
	symbol: string;
	setSymbol: any;
	isGameEnded: any;
	endGame: any;
	isAllCellsInactive: boolean;
}

const Grid: React.FC<Props> = (props) => {
	return (
		<div className='grid grid-rows-3 grid-cols-3 gap-2 bg-blue-300 px-2 py-2 rounded'>
			{props.values.map((el, index) => (
				<Cell
					key={index}
					id={index}
					values={props.values}
					symbol={props.symbol}
					setSymbol={props.setSymbol}
					setValues={props.setValues}
					isGameEnded={props.isGameEnded}
					endGame={props.endGame}
					isAllCellsInactive={props.isAllCellsInactive}
				/>
			))}
		</div>
	);
};

export default Grid;
