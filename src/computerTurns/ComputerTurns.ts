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
			// makeComputerTurnHard(values, symbol, endTurn);
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

// const makeComputerTurnHard = (
//   values: Value[],
//   symbol: string,
//   endTurn: any
// ): void => {
//   const minimax = (board: Value[], depth: number, isMaximizing: boolean): number => {
//     const score = evaluateBoard(board, symbol);

//     if (score !== 0) {
//       return score;
//     }

//     if (isMaximizing) {
//       let bestScore = -Infinity;

//       for (let i = 0; i < board.length; i++) {
//         const cell = board[i];

//         if (cell.value === '') {
//           cell.value = symbol;
//           const currentScore = minimax(board, depth + 1, false);
//           cell.value = '';

//           bestScore = Math.max(currentScore, bestScore);
//         }
//       }

//       return bestScore;
//     } else {
//       let bestScore = Infinity;

//       for (let i = 0; i < board.length; i++) {
//         const cell = board[i];

//         if (cell.value === '') {
//           cell.value = symbol === '×' ? '○' : '×';
//           const currentScore = minimax(board, depth + 1, true);
//           cell.value = '';

//           bestScore = Math.min(currentScore, bestScore);
//         }
//       }

//       return bestScore;
//     }
//   };

//   const bestMove = (): MinimaxResult => {
//     let bestScore = -Infinity;
//     let bestMove: MinimaxResult = { score: -Infinity, index: -1 };

//     for (let i = 0; i < values.length; i++) {
//       const cell = values[i];

//       if (cell.value === '') {
//         // Type assertion: временно добавляем поле index
//         const cellWithIndex = { ...(cell as any), index: i };

//         cellWithIndex.value = symbol;
//         const moveScore = minimax(values, 0, false);
//         cellWithIndex.value = '';

//         if (moveScore > bestScore) {
//           bestScore = moveScore;
//           bestMove = { score: moveScore, index: i };
//         }
//       }
//     }

//     return bestMove;
//   };

//   const move = bestMove();

//   // Проверяем, что индекс определен и валиден
//   if (move.index !== undefined && move.index >= 0 && move.index < values.length) {
//     // Type assertion: временно добавляем поле index
//     values[move.index] = { ...(values[move.index] as any), index: move.index };

//     values[move.index].value = symbol === '×' ? '○' : '×';
//     values[move.index].active = false;
//     endTurn(values);
//   } else {
//     // Обработка случая, когда индекс не определен или некорректен
//     console.error("Invalid move index:", move.index);
//   }
// };


export default makeComputerTurnDependsOnDifficulty;
