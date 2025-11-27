import type { ComponentType } from 'svelte';

import ajou from './ajou.svelte';
import khee from './khee.svelte';
import skku from './skku.svelte';
import inha from './inha.svelte';
import krar from './krar.svelte';
import hyer from './hyer.svelte';
import dank from './dank.svelte';

export interface University {
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

export const universities: University[] = [
	{
		name: '아주대학교',
		shortname: '아주대',
		id: 'ajou',
		host: '아주대학교 SW중심대학사업단',
		organizerAffiliation: '아주대학교 알고리즘 소학회',
		organizerName: 'A.N.S.I.',
		organizerRepresentative: '이종학',
		precontest: '2025 아주대학교 프로그래밍 경시대회 (APC)',
		precontestDate: '2025. 05. 17.',
		component: ajou
	},
	{
		name: '경희대학교',
		shortname: '경희대',
		id: 'khee',
		host: '경희대학교 컴퓨터공학부 학생회',
		organizerAffiliation: '경희대학교 컴퓨터공학부 학생회 | 경희대학교 알고리즘 동아리',
		organizerName: 'KHUA',
		organizerRepresentative: '배승찬',
		precontest: 'shake! 경희대학교 예선(단국대 공동개최)',
		precontestDate: '2025. 11. 29.',
		component: khee
	},
	{
		name: '성균관대학교',
		shortname: '성균관대',
		id: 'skku',
		host: '성균관대학교 소프트웨어융합대학',
		organizerAffiliation: '성균관대학교 알고리즘 동아리',
		organizerName: 'NPC',
		organizerRepresentative: '이승재',
		precontest: '2025 SKKU 프로그래밍 대회',
		precontestDate: '2025. 05. 31.',
		component: skku
	},
	{
		name: '인하대학교',
		shortname: '인하대',
		id: 'inha',
		host: '인하대학교 컴퓨터공학과',
		organizerAffiliation: '인하대학교 컴퓨터공학 학술소모임',
		organizerName: 'CTP',
		organizerRepresentative: '김형주',
		precontest: '2025 인하대학교 프로그래밍 경진대회 (IUPC)',
		precontestDate: '2025. 5. 17.',
		component: inha
	},
	{
		name: '한국항공대학교',
		shortname: '항공대',
		id: 'krar',
		host: '한국항공대학교 SW중심대학사업단',
		organizerAffiliation: '한국항공대학교 SW중심대학사업단',
		organizerName: '',
		organizerRepresentative: '',
		precontest: '2025 제5회 한국항공대학교 프로그래밍 경시대회 (KAUPC)',
		precontestDate: '2025. 9. 27.',
		component: krar
	},
	{
		name: '한양대학교 ERICA',
		shortname: '한양ERICA',
		id: 'hyer',
		host: '한양대학교 ERICA 알고리즘 학회 영과일',
		organizerAffiliation: '한양대학교 ERICA 알고리즘 학회',
		organizerName: '영과일',
		organizerRepresentative: '김재민',
		precontest: '2025 ZOAC 프로그래밍 대회',
		precontestDate: '2025. 11. 15.',
		component: hyer
	},
	{
		name: '단국대학교',
		shortname: '단국대',
		id: 'dankok',
		host: '단국대학교 SW중심대학사업단',
		organizerAffiliation: '단국대학교 소프트웨어학과 알고리즘 동아리',
		organizerName: 'SWAG',
		organizerRepresentative: '안균승',
		precontest: 'Dankook Univ. SWAG Programming Contest(DSPC 2025)(경희대 공동개최)',
		precontestDate: '2025. 11. 29.',
		component: dank
	}
];
