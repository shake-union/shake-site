<script lang="ts">
	import type { University } from '.';

	export let univ: University;
</script>

<p>
	<strong>{univ.name}</strong>는
	<strong>{univ.precontest}</strong>를 자체 선발전으로 진행, 최대 10명의 학교 대표를 선발합니다.
</p>

<p class="d-flex gap-1">
	<a class="btn btn-shake-primary text-white px-2" href="https://zerone01.kr/zoac/">
		{univ.name} 선발전 바로가기
	</a>
	<a class="btn btn-shake-primary text-white px-2" href="https://zoj.kr/contests/755cab93-4cab-4926-9f71-09a237bde73f">
		{univ.name} 선발전 문제 바로가기
	</a>
</p>
