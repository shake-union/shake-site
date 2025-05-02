<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>본선 문제 및 풀이</h1>
				<div class="mt-3">
					<a href={data.problemUrl} target="_blank" rel="noreferrer">
						<button type="button" class="btn btn-contest-problem"
							>{data.year} shake! 본선 문제</button
						>
					</a>
					<a href={data.solutionUrl} target="_blank" rel="noreferrer">
						<button type="button" class="btn btn-contest-solution"
							>{data.year} shake! 본선 풀이</button
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-light d-flex">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>최종 순위</h1>
				<img class="w-100" src={data.scoreboardUrl} alt="" />
			</div>
		</div>
	</div>
</section>
