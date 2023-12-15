import { Dispatch } from "@reduxjs/toolkit";
import { setIsGameContinues, setValues } from "./store";


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

const endGame = (dispatch: Dispatch) => {
	dispatch(setIsGameContinues({ value: false }));
	setTimeout(() => {
		resetGame(dispatch);
	}, 1500);
};

export default endGame