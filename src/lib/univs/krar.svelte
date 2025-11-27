<script lang="ts">
	import type { University } from '.';

	export let univ: University;
</script>

<p>
	<strong>{univ.name}</strong>는
	<strong>{univ.precontest}</strong>를 자체 선발전으로 진행, 최대 10명의 학교대표를 선발합니다.
</p>
