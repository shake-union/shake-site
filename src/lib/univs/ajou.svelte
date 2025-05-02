<script lang="ts">
	import { base } from '$app/paths';
	import type { University } from '.';

	export let univ: University;
</script>

<p>
	<strong>{univ.name}</strong>는
	<strong>{univ.precontest}</strong>를 자체 선발전으로 진행, 최대 10명의 학교 대표를 선발합니다.
</p>

<p>
	<a href="{base}/apc">
		<button class="btn btn-shake-primary text-white">아주대학교 선발전 바로가기</button>
	</a>
</p>
