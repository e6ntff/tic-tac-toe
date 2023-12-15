import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { State } from './interfaces';
import { difficulties } from './constants';

const initialState: State = {
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
	difficulty: 'easy',
	is2Players: false,
	currentSymbol: '×',
	isGameContinues: true,
	isComputerTurn: false,
	gameResult: '',
};

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setValues: (state, action) => {
			state.values = action.payload.values;
		},
		changeDifficulty: (state) => {
			const length = difficulties.length;
			const currentIndex = difficulties.indexOf(state.difficulty);
			const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
			state.difficulty = difficulties[nextIndex];
		},
		changeGameMode: (state) => {
			state.is2Players = !state.is2Players;
		},
		changeSymbol: (state) => {
			const newSymbol = state.currentSymbol === '×' ? '○' : '×';
			state.currentSymbol = newSymbol;
		},
		setIsGameContinues: (state, action) => {
			state.isGameContinues = action.payload.value;
		},
		setIsComputerTurn: (state, action) => {
			state.isComputerTurn = action.payload.value;
		},
		setGameResult: (state, action) => {
			state.gameResult = action.payload.value
		},
	},
});

const rootReducer = combineReducers({
	game: gameSlice.reducer,
});

const GlobalStore = configureStore({
	reducer: rootReducer,
});

export const getValues = (state: any) => state.game.values;

export const getDifficulty = (state: any) => state.game.difficulty;

export const getSymbol = (state: any) => state.game.currentSymbol;

export const getIsGameEnded = (state: any) => state.game.isGameEnded;

export const getIsGameContinues = (state: any) => state.game.isGameContinues;

export const getIs2Players = (state: any) => state.game.is2Players;

export const getIsComputerTurn = (state: any) => state.game.isComputerTurn;

export const getGameResult = (state: any) => state.game.gameResult

export const {
	setValues,
	changeDifficulty,
	changeGameMode,
	changeSymbol,
	setIsGameContinues,
	setIsComputerTurn,
	setGameResult
} = gameSlice.actions;

export default GlobalStore;
