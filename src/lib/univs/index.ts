import type { ComponentType } from 'svelte';

import ajou from './ajou.svelte';
import khee from './khee.svelte';
import skku from './skku.svelte';
import inha from './inha.svelte';
import krar from './krar.svelte';
import hyer from './hyer.svelte';

interface University {
	name: string;
	shortname: string;
	id: string;
	/** 주최 기관 */
	host: string;
	/** 주관 단체의 소속 */
	organizerAffiliation: string;
	/** 주관 단체 이름 */
	organizerName: string;
	/** 주관 대표 */
	organizerRepresentative: string;
	/** 선발전 이름 */
	precontest: string;
	/** 선발전 일정 */
	precontestDate: string;
	component: ComponentType;
}

const universities: University[] = [
	{
		name: '아주대학교',
		shortname: '아주대',
		id: 'ajou',
		host: '아주대학교 SW중심대학사업단',
		organizerAffiliation: '아주대학교 알고리즘 소학회',
		organizerName: 'A.N.S.I.',
		organizerRepresentative: '심지수 010-3029-1203',
		precontest: '2022 아주대학교 프로그래밍 경시대회 (APC)',
		precontestDate: '2022. 11. 13.',
		component: ajou
	},
	{
		name: '경희대학교',
		shortname: '경희대',
		id: 'khee',
		host: '경희대학교 컴퓨터공학부',
		organizerAffiliation: '경희대학교 컴퓨터공학부 학생회',
		organizerName: '',
		organizerRepresentative: '박민재 010-2351-7847',
		precontest: '2022 경희대학교 봄 프로그래밍 경시대회',
		precontestDate: '2022. 05. 14.',
		component: khee
	},
	{
		name: '성균관대학교',
		shortname: '성균관대',
		id: 'skku',
		host: '성균관대학교 소프트웨어학과',
		organizerAffiliation: '성균관대학교 알고리즘 동아리',
		organizerName: 'NPC',
		organizerRepresentative: '안우솔 010-4261-0125',
		precontest: '2022 shake! 성균관대학교 선발전',
		precontestDate: '2022. 11. 13.',
		component: skku
	},
	{
		name: '인하대학교',
		shortname: '인하대',
		id: 'inha',
		host: '인하대학교 컴퓨터공학과',
		organizerAffiliation: '인하대학교 컴퓨터공학 학술소모임',
		organizerName: 'CTP',
		organizerRepresentative: '주도현 010-5092-3475',
		precontest: '2022 인하대학교 프로그래밍 경시대회 (IUPC)',
		precontestDate: '2022. 05. 21.',
		component: inha
	},
	{
		name: '한국항공대학교',
		shortname: '항공대',
		id: 'krar',
		host: '한국항공대학교 소프트웨어학과',
		organizerAffiliation: '한국항공대학교 알고리즘 학회',
		organizerName: 'koala',
		organizerRepresentative: '천수환 010-7237-7616',
		precontest: '2022 제2회 한국항공대학교 프로그래밍 경시대회 (KAUPC)',
		precontestDate: '2022. 09. 17.',
		component: krar
	},
	{
		name: '한양대학교 ERICA',
		shortname: '한양ERICA',
		id: 'hyer',
		host: '한양대에리카 알고리즘 학회 0&1',
		organizerAffiliation: '한양대에리카 알고리즘 학회',
		organizerName: '0&1',
		organizerRepresentative: '윤병서 010-4532-2751',
		precontest: '2022 Zero One Algorithm Contest (ZOAC)',
		precontestDate: '2022. 12. 22.',
		component: hyer
	}
];

export { universities };
