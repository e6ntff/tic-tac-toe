import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import endGame from 'utils/endGame';
import { changeDifficulty, getDifficulty } from 'utils/store';

const DifficultyButton: React.FC = () => {
	const dispatch = useDispatch();
	const difficulty = useSelector(getDifficulty);
	return (
		<button
			className='px-2 py-1 uppercase text-2xl md:text-3xl xl:text-4xl text-blue-300 border-2 border-blue-300 rounded hover:bg-blue-100 transition-all'
			onClick={() => {
				dispatch(changeDifficulty());
				endGame(dispatch);
			}}
		>
			{difficulty}
		</button>
	);
};

export default DifficultyButton
