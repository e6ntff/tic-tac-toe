import React, { useState } from 'react';

interface Props {
	id: number;
	values: string[];
	symbol: string;
	setValues: any;
	setSymbol: any;
}

const Cell: React.FC<Props> = (props) => {
	const makeTurn = () => {
		props.setSymbol((prevSymbol: string) => (prevSymbol === '×' ? '○' : '×'));

		props.setValues((prevValues: string[]) => {
			prevValues.splice(props.id, 1, props.symbol);
			console.log(prevValues)
			return prevValues;
		});
	};
	return (
		<button
			className='w-24 h-24 rounded bg-blue-50 hover:bg-blue-100 text-blue-300 transition-all font-sans text-7xl leading-none flex justify-center items-center'
			onClick={makeTurn}
		>
			{props.values[props.id]}
		</button>
	);
};

export default Cell;
