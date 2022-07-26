export default interface Columnable {
	display: () => string;
}

export interface ColumnHeader {
	text: string;
	level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export const Columnable = (): Columnable => {
	return {
		display() {
			return toString();
		},
	}
};