import React from 'react';
import {
	changeDifficulty,
	changeGameMode,
	getDifficulty,
	getIs2Players,
	getIsGameContinues,
	getSymbol,
} from '../utils/store';
import { useDispatch, useSelector } from 'react-redux';

const Panel: React.FC = () => {
	const dispatch = useDispatch();

	const isGameContinues = useSelector(getIsGameContinues);

	const difficulty = useSelector(getDifficulty);

	const symbol = useSelector(getSymbol);

	const is2Players = useSelector(getIs2Players);

	return (
		<div className='flex flex-col gap-2 px-2 py-2 rounded items-center'>
			{!is2Players && (
				<button
					className='px-2 py-1 uppercase text-2xl md:text-3xl xl:text-4xl text-blue-300 border-2 border-blue-300 rounded hover:bg-blue-100 transition-all'
					onClick={() => {
						dispatch(changeDifficulty());
					}}
				>
					{difficulty}
				</button>
			)}
			<div className='flex gap-4'>
				<p className='text-5xl text-blue-300'>
					{!isGameContinues
						? `${symbol === '×' ? '○' : '×'} won`
						: `${symbol} turn`}
				</p>
				<input
					type='checkbox'
					onChange={() => {
						dispatch(changeGameMode());
					}}
				/>
			</div>
		</div>
	);
};

export default Panel;
