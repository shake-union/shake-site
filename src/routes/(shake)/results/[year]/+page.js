import data from '../../../../shake-data.csv';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const row = data.find((row) => row.year === params.year);
	const { year, problemUrl, solutionUrl, scoreboardUrl } = row;

	return {
		year,
		problemUrl,
		solutionUrl,
		scoreboardUrl
	};
}
