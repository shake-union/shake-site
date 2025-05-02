import isAbsoluteUrl from 'is-absolute-url';

import { base } from '$app/paths';

import data from '../../../../shake-data.csv';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const row = data.find((row) => row.year === params.year);
	let { year, problemUrl, solutionUrl, scoreboardUrl } = row;

	if (!isAbsoluteUrl(scoreboardUrl)) {
		scoreboardUrl = `${base}${scoreboardUrl}`;
	}

	return {
		year,
		problemUrl,
		solutionUrl,
		scoreboardUrl
	};
}
