import React from 'react';
import { useSelector } from 'react-redux';
import { getGameResult, getIsGameContinues, getSymbol } from 'utils/store';

const TurnScreen: React.FC = () => {
	const gameResult = useSelector(getGameResult);
	const isGameContinues = useSelector(getIsGameContinues);
	const symbol = useSelector(getSymbol);
	return (
		<p className='text-3xl md:text-4xl xl:text-5xl text-blue-300 uppercase transition-all'>
			{!isGameContinues ? gameResult : `${symbol} turn`}
		</p>
	);
};

export default TurnScreen;
