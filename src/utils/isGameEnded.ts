import { Value } from "./interfaces";

const isGameEnded = (values: Value[]) => {
	if (!values.some((value) => value.value === '')) return true;
	if (
		(values[0].value === values[1].value &&
			values[1].value === values[2].value &&
			values[0].value !== '') ||
		(values[3].value === values[4].value &&
			values[4].value === values[5].value &&
			values[3].value !== '') ||
		(values[6].value === values[7].value &&
			values[7].value === values[8].value &&
			values[6].value !== '') ||
		(values[0].value === values[3].value &&
			values[3].value === values[6].value &&
			values[0].value !== '') ||
		(values[1].value === values[4].value &&
			values[4].value === values[7].value &&
			values[1].value !== '') ||
		(values[2].value === values[5].value &&
			values[5].value === values[8].value &&
			values[2].value !== '') ||
		(values[0].value === values[4].value &&
			values[4].value === values[8].value &&
			values[0].value !== '') ||
		(values[2].value === values[4].value &&
			values[4].value === values[6].value &&
			values[2].value !== '')
	) {
		return true;
	}
	return false;
};

export default isGameEnded