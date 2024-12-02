<script lang="ts">
	import type { University } from '.';

	export let univ: University;
</script>

<p>
	<strong>{univ.name}</strong>는
	<strong>{univ.precontest}</strong>을 통해 최대 10명의 학교대표를 선발합니다.
</p>
