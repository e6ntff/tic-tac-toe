import React, { useEffect, useState } from 'react';

interface Props {
	id: number;
	values: string[];
	symbol: string;
	setValues: any;
	setSymbol: any;
	isGameEnded: any;
	endGame: any;
	isAllCellsInactive: boolean;
}

const Cell: React.FC<Props> = (props) => {
	const [isCellActive, setIsCellActive] = useState<boolean>(true);

	useEffect(() => {
		if (props.values[props.id] === '') setIsCellActive(true);
	}, [props.values, props.id]);

	const makeTurn = () => {
		if (isCellActive) {
			props.setSymbol((prevSymbol: string) => (prevSymbol === '×' ? '○' : '×'));

			props.setValues((prevValues: string[]) => {
				prevValues.splice(props.id, 1, props.symbol);
				if (props.isGameEnded(prevValues)) {
					props.endGame();
				}
				return prevValues;
			});
		}
		setIsCellActive(false);
	};

	return (
		<button
			className={`w-16 h-16 md:w-24 md:h-24 md:text-7xl xl:w-32 xl:h-32 xl:text-9xl rounded bg-blue-50 hover:bg-blue-100 disabled:bg-blue-200
			 text-blue-300 transition-all font-sans text-5xl leading-none flex justify-center items-center`}
			onClick={makeTurn}
			disabled={!isCellActive || props.isAllCellsInactive}
		>
			{props.values[props.id]}
		</button>
	);
};

export default Cell;
