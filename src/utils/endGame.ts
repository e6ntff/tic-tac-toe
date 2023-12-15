import { Dispatch } from '@reduxjs/toolkit';
import { setIsGameContinues, setValues } from './store';

const resetGame = (dispatch: Dispatch) => {
	dispatch(
		setValues({
			values: [
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
				{ value: '', active: true },
			],
		})
	);
	dispatch(setIsGameContinues({ value: true }));
};

const endGame = (dispatch: Dispatch, delay: number = 0) => {
	dispatch(setIsGameContinues({ value: false }));
	setTimeout(() => {
		resetGame(dispatch);
	}, delay);
};

export default endGame;
