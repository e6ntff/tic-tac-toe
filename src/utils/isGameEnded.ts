import { Value } from './interfaces';
import { setGameResult } from './store';

const winPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const isGameEnded = (values: Value[], symbol: string, dispatch: any) => {

	for (const pattern of winPatterns) {
		const [a, b, c] = pattern;
		if (
			values[a].value === symbol &&
			values[b].value === symbol &&
			values[c].value === symbol
		) {
			dispatch(setGameResult({value: `${symbol} won`}))
			return true;
		}
	}
	if (!values.some((value) => value.value === '')) {
		dispatch(setGameResult({value: 'draw'}))
		return true
	}
	return false;
};

// const isGameEnded = (values: Value[]) => {
// 	if (!values.some((value) => value.value === '')) return true;
// 	if (
// 		(values[0].value === values[1].value &&
// 			values[1].value === values[2].value &&
// 			values[0].value !== '') ||
// 		(values[3].value === values[4].value &&
// 			values[4].value === values[5].value &&
// 			values[3].value !== '') ||
// 		(values[6].value === values[7].value &&
// 			values[7].value === values[8].value &&
// 			values[6].value !== '') ||
// 		(values[0].value === values[3].value &&
// 			values[3].value === values[6].value &&
// 			values[0].value !== '') ||
// 		(values[1].value === values[4].value &&
// 			values[4].value === values[7].value &&
// 			values[1].value !== '') ||
// 		(values[2].value === values[5].value &&
// 			values[5].value === values[8].value &&
// 			values[2].value !== '') ||
// 		(values[0].value === values[4].value &&
// 			values[4].value === values[8].value &&
// 			values[0].value !== '') ||
// 		(values[2].value === values[4].value &&
// 			values[4].value === values[6].value &&
// 			values[2].value !== '')
// 	) {
// 		return true;
// 	}
// 	return false;
// };

export default isGameEnded;
