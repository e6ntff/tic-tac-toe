import React from 'react';

interface Props {
	id: number;
	values: string[];
	symbol: string;
	setValues: any;
	setSymbol: any;
	isGameEnded: any;
}

const Cell: React.FC<Props> = (props) => {
	const isCellActive = () => {
		if (props.symbol !== props.values[props.id]) return true;
		return false;
	};

	const makeTurn = () => {
		if (isCellActive()) {
			props.setSymbol((prevSymbol: string) => (prevSymbol === '×' ? '○' : '×'));

			props.setValues((prevValues: string[]) => {
				prevValues.splice(props.id, 1, props.symbol);
				if (props.isGameEnded(prevValues)) {
					
				}
				return prevValues;
			});
		}
	};
	return (
		<button
			className={`w-24 h-24 rounded bg-blue-50 ${
				!isCellActive() ? 'bg-blue-200 ' : ' hover:bg-blue-100'
			} text-blue-300 transition-all font-sans text-7xl leading-none flex justify-center items-center`}
			onClick={makeTurn}
		>
			{props.values[props.id]}
		</button>
	);
};

export default Cell;
