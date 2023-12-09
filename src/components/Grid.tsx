import React, { useEffect, useState } from 'react';
import Cell from './Cell';

interface Props {
	symbol: string;
	setSymbol: any;
}

const Grid: React.FC<Props> = (props) => {
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
	useEffect(() => {
		console.log(values);
	}, [values]);
	return (
		<div className='grid grid-rows-3 grid-cols-3 gap-2 bg-blue-300 px-2 py-2 rounded'>
			{values.map((el, index) => (
				<Cell
					key={index}
					id={index}
					values={values}
					symbol={props.symbol}
					setSymbol={props.setSymbol}
					setValues={setValues}
				/>
			))}
		</div>
	);
};

export default Grid;
