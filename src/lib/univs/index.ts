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
		organizerRepresentative: '김유겸',
		precontest: '2024 아주대학교 프로그래밍 경시대회 (APC)',
		precontestDate: '2024. 05. 25.',
		component: ajou
	},
	{
		name: '경희대학교',
		shortname: '경희대',
		id: 'khee',
		host: '경희대학교 컴퓨터공학부',
		organizerAffiliation: '경희대학교 컴퓨터공학부 학생회',
		organizerName: '',
		organizerRepresentative: '이혁승',
		precontest: '2024 경희대학교 프로그래밍 경시대회(ERICA 동시개최)',
		precontestDate: '2024. 11. 9.',
		component: khee
	},
	{
		name: '성균관대학교',
		shortname: '성균관대',
		id: 'skku',
		host: '성균관대학교 소프트웨어학과',
		organizerAffiliation: '성균관대학교 알고리즘 동아리',
		organizerName: 'NPC',
		organizerRepresentative: '이승재',
		precontest: '2024 성균관대학교 프로그래밍 경진대회(아주대학교 동시 개최)',
		precontestDate: '2024. 05. 25.',
		component: skku
	},
	{
		name: '인하대학교',
		shortname: '인하대',
		id: 'inha',
		host: '인하대학교 컴퓨터공학과',
		organizerAffiliation: '인하대학교 컴퓨터공학 학술소모임',
		organizerName: 'CTP',
		organizerRepresentative: '최명근',
		precontest: '2024 인하대학교 프로그래밍 경시대회 (IUPC)',
		precontestDate: '2024. 5. 18.',
		component: inha
	},
	{
		name: '한국항공대학교',
		shortname: '항공대',
		id: 'krar',
		host: '한국항공대학교 소프트웨어학과',
		organizerAffiliation: '한국항공대학교 알고리즘 학회',
		organizerName: 'koala',
		organizerRepresentative: '지원',
		precontest: '2024 제4회 한국항공대학교 프로그래밍 경시대회 (KAUPC)',
		precontestDate: '2024. 8. 3.',
		component: krar
	},
	{
		name: '한양대학교 ERICA',
		shortname: '한양ERICA',
		id: 'hyer',
		host: '한양대에리카 알고리즘 학회 0&1',
		organizerAffiliation: '한양대에리카 알고리즘 학회',
		organizerName: '0&1',
		organizerRepresentative: '오익준',
		precontest: '2024 Zero One Algorithm Contest (ZOAC)',
		precontestDate: '2024. 11. 9.',
		component: hyer
	},
	{
		name: '단국대학교',
		shortname: '단국대',
		id: 'dankok',
		host: '단국대학교 모빌리티 포렌식 보안 연구소',
		organizerAffiliation: '단국대학교 소프트웨어학과 과동아리',
		organizerName: 'SWAG',
		organizerRepresentative: '임백규',
		precontest: '단국대학교 프로그래밍 경시대회(DSPC)(ERICA 동시개최)',
		precontestDate: '2024. 11. 9.',
		component: dank
	}
];
