<svelte:head>
	<title>shake! 경인지역 6개대학 연합 프로그래밍 경시대회</title>

	<link
		rel="apple-touch-icon-precomposed"
		sizes="57x57"
		href="/images/favicons/shake/apple-touch-icon-57x57.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="114x114"
		href="/images/favicons/shake/apple-touch-icon-114x114.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="72x72"
		href="/images/favicons/shake/apple-touch-icon-72x72.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="144x144"
		href="/images/favicons/shake/apple-touch-icon-144x144.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="60x60"
		href="/images/favicons/shake/apple-touch-icon-60x60.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="120x120"
		href="/images/favicons/shake/apple-touch-icon-120x120.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="76x76"
		href="/images/favicons/shake/apple-touch-icon-76x76.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="152x152"
		href="/images/favicons/shake/apple-touch-icon-152x152.png"
	/>
	<link
		rel="icon"
		type="image/png"
		href="/images/favicons/shake/favicon-196x196.png"
		sizes="196x196"
	/>
	<link rel="icon" type="image/png" href="/images/favicons/shake/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/images/favicons/shake/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/images/favicons/shake/favicon-16x16.png" sizes="16x16" />
	<link
		rel="icon"
		type="image/png"
		href="/images/favicons/shake/favicon-128x128.png"
		sizes="128x128"
	/>
	<meta name="application-name" content="shake! 2022" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="/images/favicons/shake/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/images/favicons/shake/mstile-70x70.png" />
	<meta
		name="msapplication-square150x150logo"
		content="/images/favicons/shake/mstile-150x150.png"
	/>
	<meta name="msapplication-wide310x150logo" content="/images/favicons/shake/mstile-310x150.png" />
	<meta
		name="msapplication-square310x310logo"
		content="/images/favicons/shake/mstile-310x310.png"
	/>

	<meta property="og:image" content="/images/og/shake-2022.png" />
	<meta property="og:title" content="2022 경인지역 6개대학 연합 프로그래밍 경시대회 shake!" />
	<meta property="og:url" content="/" />
	<meta property="og:site_name" content="shake! 2022" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="아주대학교, 경희대학교, 성균관대학교, 인하대학교, 한국항공대학교, 한양대학교 ERICA의 학교 대표들이 모여 함께하는 교류의 장, 2022 shake!"
	/>
</svelte:head>

<div class="shadow-sm bg-white fixed-top">
	<div class="container">
		<div class="row py-1">
			<div class="col-md-10 offset-md-1">
				<nav class="navbar navbar-expand-lg">
					<a class="navbar-brand" href="/" title="">
						<img src="/logo-shake-black.png" class="middle-content" alt="" height="24px" />
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
								<a href="/#about" class="text-dark text-decoration-none nav-link">소개</a>
							</li>
							<li class="nav-item">
								<a href="/#apply" class="text-dark text-decoration-none nav-link">대회일정</a>
							</li>
							<li class="nav-item">
								<a href="/#example" class="text-dark text-decoration-none nav-link">문제예시</a>
							</li>
							<li class="nav-item">
								<a href="/#rule" class="text-dark text-decoration-none nav-link">기준 및 규정</a>
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
									<div class="col-12">
										<a href="https://linc.ajou.ac.kr" target="_blank" rel="noreferrer">
											<img src="/logo-ajou-linc3.0.png" alt="linc 3.0" class="w-100" />
										</a>
									</div>
									<div class="col-12">
										<a href="https://sw.ajou.ac.kr/sw/index.do" target="_blank" rel="noreferrer">
											<img src="/logo-ajou-ncesw.png" alt="linc 3.0" class="w-100" />
										</a>
									</div>
								</div>
							</div>
							<div class="col-5 col-md-2" />
						</div>
					</div>
					<div class="col-md-4">
						<h5><strong>주관</strong></h5>
						<p class="small">
							아주대학교 알고리즘 소학회 <strong>A.N.S.I.</strong>
							<br />경희대학교 컴퓨터공학부 학생회
							<br />성균관대학교 알고리즘 동아리 <strong>NPC</strong>
							<br />인하대학교 컴퓨터공학 학술소모임 <strong>CTP</strong>
							<br />한국항공대학교 알고리즘 학회 <strong>koala</strong>
							<br />한양대학교 ERICA 알고리즘 학회 <strong>0&1</strong>
						</p>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-5 col-md-7">
								<h5><strong>후원</strong></h5>
								<div class="row gy-3">
									<div class="col-12">
										<a href="https://www.moloco.com/ko" target="_blank" rel="noreferrer">
											<img src="/logo-company-moloco.png" alt="Moloco" class="w-100" />
										</a>
									</div>
									<div class="col-12">
										<a href="https://www.mobis.co.kr" target="_blank" rel="noreferrer">
											<img src="/logo-company-hyundaimobis.jpg" alt="Mobis" class="w-100" />
										</a>
									</div>
									<div class="col-12">
										<a href="https://startlink.io" target="_blank" rel="noreferrer">
											<img src="/logo-company-startlink.png" alt="linc 3.0" class="w-100" />
										</a>
									</div>
								</div>
							</div>
							<div class="col-7 col-md-5" />
						</div>
					</div>
					<div class="col-md-4">
						<h5><strong>문의</strong></h5>
						<p class="small">email) <a href="mailto:ansi.ajou@gmail.com">ansi.ajou@gmail.com</a></p>
					</div>
				</div>
			</div>
		</div>
		<hr class="my-0" />
		<div class="row my-5">
			<div class="col text-center">
				<p class="small">© shake! 2015-2023</p>
			</div>
		</div>
	</div>
</section>
