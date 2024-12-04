<script>
	import { base } from '$app/paths';

	import { universities } from '../../lib/univs';
</script>

<svelte:head>
	<title>shake! 경인지역 대학 연합 프로그래밍 경시대회</title>

	<link
		rel="apple-touch-icon-precomposed"
		sizes="57x57"
		href="{base}/images/favicons/shake/apple-touch-icon-57x57.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="114x114"
		href="{base}/images/favicons/shake/apple-touch-icon-114x114.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="72x72"
		href="{base}/images/favicons/shake/apple-touch-icon-72x72.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="144x144"
		href="{base}/images/favicons/shake/apple-touch-icon-144x144.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="60x60"
		href="{base}/images/favicons/shake/apple-touch-icon-60x60.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="120x120"
		href="{base}/images/favicons/shake/apple-touch-icon-120x120.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="76x76"
		href="{base}/images/favicons/shake/apple-touch-icon-76x76.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="152x152"
		href="{base}/images/favicons/shake/apple-touch-icon-152x152.png"
	/>
	<link
		rel="icon"
		type="image/png"
		href="{base}/images/favicons/shake/favicon-196x196.png"
		sizes="196x196"
	/>
	<link
		rel="icon"
		type="image/png"
		href="{base}/images/favicons/shake/favicon-96x96.png"
		sizes="96x96"
	/>
	<link
		rel="icon"
		type="image/png"
		href="{base}/images/favicons/shake/favicon-32x32.png"
		sizes="32x32"
	/>
	<link
		rel="icon"
		type="image/png"
		href="{base}/images/favicons/shake/favicon-16x16.png"
		sizes="16x16"
	/>
	<link
		rel="icon"
		type="image/png"
		href="{base}/images/favicons/shake/favicon-128x128.png"
		sizes="128x128"
	/>
	<meta name="application-name" content="shake! 2023" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="{base}/images/favicons/shake/mstile-144x144.png" />
	<meta
		name="msapplication-square70x70logo"
		content="{base}/images/favicons/shake/mstile-70x70.png"
	/>
	<meta
		name="msapplication-square150x150logo"
		content="{base}/images/favicons/shake/mstile-150x150.png"
	/>
	<meta
		name="msapplication-wide310x150logo"
		content="{base}/images/favicons/shake/mstile-310x150.png"
	/>
	<meta
		name="msapplication-square310x310logo"
		content="{base}/images/favicons/shake/mstile-310x310.png"
	/>

	<meta property="og:image" content="{base}/images/og/shake-2023.png" />
	<meta property="og:title" content="2024 경인지역 대학 연합 프로그래밍 경시대회 shake!" />
	<meta property="og:url" content="{base}/" />
	<meta property="og:site_name" content="shake! 2023" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="아주대학교, 경희대학교, 성균관대학교, 인하대학교, 한국항공대학교, 한양대학교 ERICA, 단국대학교의 학교 대표들이 모여 함께하는 교류의 장, 2024 shake!"
	/>
</svelte:head>

<div class="shadow-sm bg-white fixed-top">
	<div class="container">
		<div class="row py-1">
			<div class="col-md-10 offset-md-1">
				<nav class="navbar navbar-expand-lg">
					<a class="navbar-brand" href="{base}/" title="">
						<img src="{base}/logo-shake-black.png" class="middle-content" alt="" height="24px" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a href="{base}/#about" class="text-dark text-decoration-none nav-link">소개</a>
							</li>
							<li class="nav-item">
								<a href="{base}/#apply" class="text-dark text-decoration-none nav-link">대회일정</a>
							</li>
							<li class="nav-item">
								<a href="{base}/#example" class="text-dark text-decoration-none nav-link"
									>문제예시</a
								>
							</li>
							<li class="nav-item">
								<a href="{base}/#rule" class="text-dark text-decoration-none nav-link"
									>기준 및 규정</a
								>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</div>

<slot />

<section id="footer" class="bg-white">
	<div class="container">
		<div class="row py-5">
			<div class="col-md-10 offset-md-1">
				<div class="row gy-5">
					<div class="col-md-4">
						<div class="row">
							<div class="col-7 col-md-10">
								<h5><strong>주최</strong></h5>
								<div class="row gy-3">
									<!-- <div class="col-12">
										<div class="ratio" style="--bs-aspect-ratio: 14%;">
											<a href="https://linc.ajou.ac.kr" target="_blank" rel="noreferrer">
												<img
													src="{base}/logo-ajou-linc3.0-black.png"
													alt="LINC 3.0"
													class="h-100"
												/>
											</a>
										</div>
									</div> -->
									<div class="col-12">
										<div class="ratio" style="--bs-aspect-ratio: 14%;">
											<a href="https://sw.ajou.ac.kr/sw/index.do" target="_blank" rel="noreferrer">
												<img
													src="{base}/logo-ajou-ncesw-black.png"
													alt="SW중심대학사업단"
													class="h-100"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-5 col-md-2" />
						</div>
					</div>
					<div class="col-md-4">
						<h5><strong>주관</strong></h5>
						<p>
							{#each universities as univ}
								{univ.organizerAffiliation}
								<strong>
									{univ.organizerName}
								</strong>
								<br />
							{/each}
						</p>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-5 col-md-7">
								<h5><strong>후원</strong></h5>
								<div class="row gy-3">
									<!-- <div class="col-12">
										<a href="https://www.dspace.com/ko/kor/home.cfm" target="_blank" rel="noreferrer">
											<img src="{base}/logo-company-dspace.png" alt="dSPACE" class="w-100" />
										</a>
									</div> -->
									<div class="col-12">
										<a href="https://www.mobis.co.kr" target="_blank" rel="noreferrer">
											<img src="{base}/logo-company-hyundaimobis.jpg" alt="Mobis" class="w-100" />
										</a>
									</div>
									<!-- <div class="col-12">
										<a href="https://www.moloco.com/ko" target="_blank" rel="noreferrer">
											<img src="{base}/logo-company-moloco.png" alt="Moloco" class="w-100" />
										</a>
									</div> -->
									<div class="col-12">
										<a href="https://solved.ac/" target="_blank" rel="noreferrer">
											<img src="{base}/logo-company-solvedac-black.png" alt="solved.ac" class="w-100" />
										</a>
									</div>
									<div class="col-12">
										<a href="https://startlink.io" target="_blank" rel="noreferrer">
											<img src="{base}/logo-company-startlink.png" alt="Startlink" class="w-100" />
										</a>
									</div>
								</div>
							</div>
							<div class="col-7 col-md-5" />
						</div>
					</div>
					<div class="col-md-4">
						<h5><strong>문의</strong></h5>
						<p>
							<i class="bi bi-envelope" /> email:
							<a href="mailto:ansi.ajou@gmail.com">ansi.ajou@gmail.com</a>
						</p>
					</div>
					<div class="col-md-4">
						<h5><strong>링크</strong></h5>
						<p>
							<i class="bi bi-github" /> GitHub:
							<a href="https://github.com/shake-union" target="_blank" rel="noreferrer"
								>github.com/shake-union</a
							>
						</p>
					</div>
				</div>
			</div>
		</div>
		<hr class="my-0" />
		<div class="row my-5">
			<div class="col text-center small">
				<!--
					Origianlly developed by waps12b at 2015 (waps12b@naver.com)
        			Originally designed by garam at 2015 (http://gar.am)
					Refactored by rlj1202 at 2023 using SvelteKit (rlj1202@gmail.com)
					Maintained by rlj1202 since 2023 (rlj1202@gmail.com)
				-->
				<p><i class="bi bi-c-circle" /> shake! 2015-{new Date().getFullYear()}</p>
				<p>
					Refactored and maintained by <a
						href="https://github.com/rlj1202"
						target="_blank"
						rel="noreferrer">rlj1202</a
					>
					at 2023 using
					<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
					(<a href="mailto:rlj1202@gmail.com">rlj1202@gmail.com</a>)
				</p>
			</div>
		</div>
	</div>
</section>
