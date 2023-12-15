const makeComputerTurnEasy = (
	values: string[],
	setValues: any,
	symbol: string
) => {
	const indexesToTurn = values.reduce(
		(acc: number[], value: string, index: number) => {
			if (value === '') acc.push(index);
			return acc;
		},
		[]
	);
	const randIndex = Math.floor(Math.random() * indexesToTurn.length);
	values[randIndex] = symbol;
	console.log(values);
	setValues(values);
};

const makeComputerTurnMedium = () => {};

const makeComputerTurnHard = () => {};

export { makeComputerTurnEasy, makeComputerTurnMedium, makeComputerTurnHard };
