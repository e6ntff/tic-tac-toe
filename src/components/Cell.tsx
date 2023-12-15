import React from 'react';
// import {
// 	makeComputerTurnEasy,
// 	makeComputerTurnHard,
// 	makeComputerTurnMedium,
// } from '../computerTurns/ComputerTurns';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeSymbol,
	getDifficulty,
	getIs2Players,
	getIsComputerTurn,
	getIsGameContinues,
	getSymbol,
	getValues,
	setIsComputerTurn,
	setValues,
} from '../utils/store';
import isGameEnded from '../utils/isGameEnded';
import endGame from 'utils/endGame';
import { Value } from 'utils/interfaces';

interface Props {
	id: number;
}

const Cell: React.FC<Props> = (props) => {
	const values = useSelector(getValues);
	const difficulty = useSelector(getDifficulty);
	const symbol = useSelector(getSymbol);
	const isGameContinues = useSelector(getIsGameContinues);
	const is2Players = useSelector(getIs2Players);
	const isComputerTurn = useSelector(getIsComputerTurn);

	const dispatch = useDispatch();

	const makeTurn = () => {
		if (!isComputerTurn) {
			console.log(symbol);
			dispatch(changeSymbol());
			if (values[props.id].active) {
				const newValues = [...values];
				newValues[props.id] = {
					value: symbol,
					active: false,
				};
				dispatch(setValues({ values: newValues }));

				if (isGameEnded(newValues)) {
					endGame(dispatch);
					return;
				}

				if (!is2Players) {
					makeComputerTurn(newValues);
				}
			}
		}
	};

	const makeComputerTurn = (values: Value[]) => {
		dispatch(setIsComputerTurn({ value: true }));

		setTimeout(() => {
			switch (difficulty) {
				case 'easy':
					// makeComputerTurnEasy(props.values, props.setValues, props.symbol);
					const newValues = [...values];
					const indexesToTurn = newValues.reduce(
						(
							acc: number[],
							value: { value: string; active: boolean },
							index: number
						) => (value.value === '' ? [...acc, index] : acc),
						[]
					);
					const randIndex =
						indexesToTurn[Math.floor(Math.random() * indexesToTurn.length)];
					newValues[randIndex] = {
						value: symbol === '×' ? '○' : '×',
						active: false,
					};
					dispatch(setValues({ values: newValues }));
					if (isGameEnded(newValues)) {
						endGame(dispatch);
						return;
					}
					break;
				// case 'medium':
				// 	makeComputerTurnMedium();
				// 	break;
				// case 'hard':
				// 	makeComputerTurnHard();
				// 	break;
				default:
					alert('Error!');
			}
			dispatch(changeSymbol());
			dispatch(setIsComputerTurn({ value: false }));
		}, 1000);
	};

	return (
		<button
			className={`w-16 h-16 text-5xl md:w-24 md:h-24 md:text-7xl xl:w-32 xl:h-32 rounded 
			xl:text-9xl bg-blue-50 hover:bg-blue-100 disabled:bg-blue-200 text-blue-300 
			transition-all font-sans leading-none flex justify-center items-center`}
			onClick={makeTurn}
			disabled={!values[props.id].active || !isGameContinues}
		>
			{values[props.id].value}
		</button>
	);
};

export default Cell;
