<script lang="ts">
	import { base } from '$app/paths';
	import type { University } from '.';

	export let univ: University;
</script>

<p>
	<strong>{univ.name}</strong>는
	<strong>{univ.precontest}</strong>을 자체 선발전으로 진행, 최대 10명의 학교 대표를 선발합니다.
</p>

<p class="d-flex flex-wrap gap-1">
	<a class="btn btn-shake-primary text-white" href="https://doj.kr/ko/categories/school/kyunghee/khspc2026">
		{univ.name} 선발전 바로가기
	</a>
	<a class="btn btn-shake-primary text-white" href="{base}/images/khspc-2026-poster.jpeg">
		{univ.name} 선발전 포스터
	</a>
</p>
