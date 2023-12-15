export interface Value {
	value: string;
	active: boolean;
}

export interface State {
	values: Value[];
	difficulty: string;
	is2Players: boolean;
	currentSymbol: string;
	isGameContinues: boolean;
	isComputerTurn: boolean;
	gameResult: string;
}
