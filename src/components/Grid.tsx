import React from 'react';
import Cell from './Cell';
import { getValues } from '../utils/store';
import { useSelector } from 'react-redux';

const Grid: React.FC = () => {
	const values = useSelector(getValues);
	return (
		<div className='grid grid-rows-3 grid-cols-3 gap-2 bg-blue-300 px-2 py-2 rounded'>
			{values.map((_: never, index: number) => (
				<Cell
					key={index}
					id={index}
				/>
			))}
		</div>
	);
};

export default Grid;
