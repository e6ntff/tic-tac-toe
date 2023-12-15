import React from 'react';
import makeComputerTurnDependsOnDifficulty from '../computerTurns/ComputerTurns';
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
import { computerTurnDelay, endGameDelay } from 'utils/constants';

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

	const endTurn = (values: Value[]) => {
		dispatch(setValues({ values: values }));

		if (isGameEnded(values)) {
			endGame(dispatch, endGameDelay);
			return true;
		}
	};

	const makeTurn = () => {
		if (!isComputerTurn) {
			dispatch(changeSymbol());
			if (values[props.id].active) {
				const newValues = [...values];
				newValues[props.id] = {
					value: symbol,
					active: false,
				};
				if (endTurn(newValues)) return;
				if (!is2Players) {
					makeComputerTurn(newValues);
				}
			}
		}
	};

	const makeComputerTurn = (values: Value[]) => {
		dispatch(setIsComputerTurn({ value: true }));
		setTimeout(() => {
			makeComputerTurnDependsOnDifficulty(
				difficulty,
				[...values],
				symbol,
				endTurn
			);
			dispatch(changeSymbol());
			dispatch(setIsComputerTurn({ value: false }));
		}, computerTurnDelay);
	};

	return (
		<button
			className={`w-16 h-16 text-5xl 
			md:w-24 md:h-24 md:text-7xl 
			xl:w-32 xl:h-32 xl:text-9xl 
			rounded bg-blue-50 text-blue-300 transition-all font-sans 
			leading-none flex justify-center items-center drop-shadow-sm
			hover:bg-blue-100 
			disabled:bg-blue-200 
			`}
			onClick={makeTurn}
			disabled={!values[props.id].active || !isGameContinues}
		>
			{values[props.id].value}
		</button>
	);
};

export default Cell;
