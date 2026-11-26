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
	qualifierOrganizer?: string;
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
		precontest: '2026 아주대학교 프로그래밍 경시대회 (APC)',
		precontestDate: '2026. 05. 23.',
		component: ajou
	},
	{
		name: '경희대학교',
		shortname: '경희대',
		id: 'khee',
		host: '정보통신기획평가원, 과학기술정보통신부, 경희대학교 SW중심대학사업단',
		organizerAffiliation: '경희대학교 컴퓨터공학부 학생회 | 경희대학교 알고리즘 동아리',
		organizerName: 'KHUA',
		qualifierOrganizer: '경희대학교 소프트웨어융합대학 알고리즘 동아리 KHUA',
		organizerRepresentative: '유재원',
		precontest: '경희대학교 2026 봄 프로그래밍 경시대회 (KHSPC 2026)',
		precontestDate: '2026. 05. 30.',
		component: khee
	},
	{
		name: '성균관대학교',
		shortname: '성균관대',
		id: 'skku',
		host: '성균관대학교 소프트웨어융합대학, AI중심대학사업단',
		organizerAffiliation: '성균관대학교 알고리즘 동아리',
		organizerName: 'NPC',
		organizerRepresentative: '박세훈',
		precontest: '2026 성균관대학교 프로그래밍 경진대회',
		precontestDate: '2026. 05. 30.',
		component: skku
	},
	{
		name: '인하대학교',
		shortname: '인하대',
		id: 'inha',
		host: '인하대학교 컴퓨터공학과',
		organizerAffiliation: '인하대학교 컴퓨터공학 학술소모임',
		organizerName: 'CTP',
		organizerRepresentative: '김강호',
		precontest: '2026 인하대학교 프로그래밍 경진대회 (IUPC)',
		precontestDate: '2026. 05. 23.',
		component: inha
	},
	{
		name: '한국항공대학교',
		shortname: '항공대',
		id: 'krar',
		host: '한국항공대학교 SW중심대학사업단',
		organizerAffiliation: '한국항공대학교 알고리즘 학회',
		organizerName: 'Koala',
		organizerRepresentative: '김태림',
		precontest: '2026 제6회 한국항공대학교 프로그래밍 경시대회 (KAUPC)',
		precontestDate: '2026. 10. 31.',
		component: krar
	},
	{
		name: '한양대학교 ERICA',
		shortname: '한양ERICA',
		id: 'hyer',
		host: '한양대학교 ERICA 소프트웨어융합대학 학회 영과일',
		organizerAffiliation: '한양대학교 ERICA 알고리즘 학회',
		organizerName: '영과일',
		qualifierOrganizer: '한양대학교 ERICA 소프트웨어융합대학 학회 영과일',
		organizerRepresentative: '손동열',
		precontest: '2026 ZOAC 프로그래밍 경진대회',
		precontestDate: '2026. 11. 12.',
		component: hyer
	},
	{
		name: '단국대학교',
		shortname: '단국대',
		id: 'dankok',
		host: '단국대학교 SW중심대학사업단',
		organizerAffiliation: '단국대학교 소프트웨어학과 알고리즘 동아리',
		organizerName: 'SWAG',
		organizerRepresentative: '이수빈',
		precontest: 'Dankook Univ. SWAG Programming Contest(DSPC 2026)',
		precontestDate: '2026. 11. 15.',
		component: dank
	}
];
