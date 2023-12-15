import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIs2Players, changeGameMode } from '../utils/store';

const GameModeCheckbox: React.FC = () => {
	const is2Players = useSelector(getIs2Players);
	const dispatch = useDispatch();

	const handleCheckboxChange = () => {
		dispatch(changeGameMode());
	};

	return (
		<div
			className='w-10 h-7 
		md:w-12 md:h-8 
		xl:w-16 xl:h-10 
		select-none transition-all duration-50 ease-in-out drop-shadow-md'
		>
			<input
				type='checkbox'
				id='gameModeSwitch'
				className='hidden'
				checked={is2Players}
				onChange={handleCheckboxChange}
			/>
			<label
				htmlFor='gameModeSwitch'
				className='h-7 md:h-8 xl:h-10 
				px-1 py-1 block overflow-hidden 
				rounded-full bg-blue-300 cursor-pointer'
			>
				<div
					className={`w-5 h-5 
					md:w-6 md:h-6 
					xl:h-8 xl:w-8 
				bg-blue-50 rounded-full shadow-md transform 
					flex justify-center items-center uppercase 
					transition-transform duration-50 ease-in 
					${is2Players ? 'translate-x-3 md:translate-x-4 xl:translate-x-6' : ''}`}
				>
					<span
						className='text-xs 
					md:text-base 
					xl:text-xl 
					text-blue-300'
					>
						{!is2Players ? '⚙' : '2p'}
					</span>
				</div>
			</label>
		</div>
	);
};

export default GameModeCheckbox;
