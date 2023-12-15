import React from 'react';
import { getIs2Players } from '../utils/store';
import { useSelector } from 'react-redux';
import GameModeCheckbox from './GameModeCheckbox';
import DifficultyButton from './DifficultyButton';
import TurnScreen from './TurnScreen';

const Panel: React.FC = () => {
	const is2Players = useSelector(getIs2Players);
	return (
		<div className='flex flex-col gap-1 px-1 py-1 items-center'>
			{!is2Players && <DifficultyButton />}
			<div className='flex items-center gap-4'>
				<TurnScreen />
				<GameModeCheckbox />
			</div>
		</div>
	);
};

export default Panel;
