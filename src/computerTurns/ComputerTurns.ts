import { Value } from 'utils/interfaces';

interface MinimaxResult {
  score: number;
  index?: number;
}

const makeComputerTurnDependsOnDifficulty = (
	difficulty: string,
	values: Value[],
	symbol: string,
	endTurn: any
) => {
	switch (difficulty) {
		case 'easy':
			makeComputerTurnEasy(values, symbol, endTurn);
			break;
		case 'medium':
			makeComputerTurnMedium(values, symbol, endTurn);
			break;
		case 'hard':
			makeComputerTurnHard(values, symbol, endTurn);
			break;
		default:
			alert('Error!');
	}
};

const makeComputerTurnEasy = (
	values: Value[],
	symbol: string,
	endTurn: any
) => {
	const indexesToTurn = values.reduce(
		(
			acc: number[],
			value: { value: string; active: boolean },
			index: number
		) => (value.value === '' ? [...acc, index] : acc),
		[]
	);
	const randIndex =
		indexesToTurn[Math.floor(Math.random() * indexesToTurn.length)];
	values[randIndex] = {
		value: symbol === '×' ? '○' : '×',
		active: false,
	};
	endTurn(values);
};

const makeComputerTurnMedium = (
	values: Value[],
	symbol: string,
	endTurn: any
) => {};

const makeComputerTurnHard = (
  values: Value[],
  symbol: string,
  endTurn: any
): void => {
  const bestMove = minimax(values, symbol);
  values[bestMove.index || 0].value = symbol === '×' ? '○' : '×';
  values[bestMove.index || 0].active = false;
  endTurn(values);
};

const minimax = (values: Value[], symbol: string): MinimaxResult => {
  const emptyCells = values.filter((cell) => cell.value === '');

  // Если пустых ячеек больше нет, возвращаем оценку текущего состояния
  if (emptyCells.length === 0) {
    return { score: evaluateBoard(values, symbol) };
  }

  // Создаем массив для хранения оценок и индексов пустых ячеек
  const moves: MinimaxResult[] = [];

  // Проходим по всем пустым ячейкам
  for (const emptyCell of emptyCells) {
    // Создаем копию доски
    const newValues = values.map((cell) => ({ ...cell }));

    // Делаем ход в текущую пустую ячейку
    newValues[emptyCell.index || 0].value = symbol;
    newValues[emptyCell.index || 0].active = false;

    // Вызываем минимакс для получения оценки хода
    const move = minimax(newValues, symbol === '×' ? '○' : '×');

    // Сохраняем оценку и индекс текущего хода
    moves.push({ score: move.score, index: emptyCell.index });
  }

  // Выбираем наилучший ход в зависимости от текущего символа (максимизируем или минимизируем)
  return symbol === '×' ? maxMove(moves) : minMove(moves);
};

const evaluateBoard = (values: Value[], symbol: string): number => {
  // Реализуйте оценку текущего состояния доски
  // Верните положительное значение, если выигрыш, отрицательное, если проигрыш, 0 в противном случае
  return 0;
};

const maxMove = (moves: MinimaxResult[]): MinimaxResult => {
  // Находим максимальную оценку
  let bestScore = -Infinity;
  let bestMove: MinimaxResult | null = null;

  for (const move of moves) {
    if (move.score > bestScore) {
      bestScore = move.score;
      bestMove = move;
    }
  }

  return bestMove as MinimaxResult;
};

const minMove = (moves: MinimaxResult[]): MinimaxResult => {
  // Находим минимальную оценку
  let bestScore = Infinity;
  let bestMove: MinimaxResult | null = null;

  for (const move of moves) {
    if (move.score < bestScore) {
      bestScore = move.score;
      bestMove = move;
    }
  }

  return bestMove as MinimaxResult;
};

export default makeComputerTurnDependsOnDifficulty;
