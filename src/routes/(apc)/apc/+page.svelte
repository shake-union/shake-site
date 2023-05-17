<script>
	import { base } from '$app/paths';

	const year = 2023;
	const email = 'ansi.ajou@gmail.com';
</script>

<section class="bg-light d-flex position-relative">
	<video
		class="position-absolute start-0 top-0 w-100 h-100 object-fit-cover"
		playsinline
		autoplay
		muted
		loop
	>
		<source src="{base}/bg-main.mp4" type="video/mp4" />
	</video>
	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(255, 255, 255, 0.5);"
	/>
	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(35, 230, 190, 0.4);"
	/>
	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(0, 0, 0, 0.5);"
	/>

	<div class="container position-relative text-white">
		<div class="row my-7">
			<div class="col-md-10 offset-md-1">
				<h1 class="display-5"><strong>{year} 아주대학교 프로그래밍 경시대회</strong></h1>
				<div class="row mt-5">
					<div class="col-6">
						<div style="height: 2px; width: 30px; background: white;" class="mb-4" />
						<h2>대회 일시</h2>
						<p class="display-5"><strong>5월 27일 14:00</strong></p>
					</div>
					<div class="col-6">
						<div style="height: 2px; width: 30px; background: white;" class="mb-4" />
						<h2>접수 기간</h2>
						<p class="display-5"><strong>5월 24일 23:59까지</strong></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="">
	<div class="container">
		<div class="row my-7">
			<div class="col-md-10 offset-md-1">
				<h1>공지사항</h1>
				<ol>
					<li>
						상격이 "소프트웨어융합대학단장상"에서 "SW중심대학사업단장상"으로 변경되었습니다.
						(2023-05-08)
					</li>
					<li>대회 일정에 후원사 홍보 일정이 추가되었습니다. (2023-05-08)</li>
					<li>시상 내역에 3등 MORAI 기업 후원상이 추가되었습니다. (2023-05-10)</li>
					<li>dSPACE 후원사가 추가되었습니다. (2023-05-17)</li>
					<li>대회 시작 일정 시간이 13시에서 12시로 앞당겨졌습니다. (2023-05-17)</li>
				</ol>
			</div>
		</div>
		<div class="row my-7">
			<div class="col-md-10 offset-md-1">
				<h1>2023년 개정 규정</h1>
				<ol>
					<li>
						하드카피, 소프트카피 관련 규정이 개정되었습니다.
						<ul>
							<li>
								하드카피, 소프트카피는 허용되지 않음 ⇒ <strong
									>소프트카피<sup>인쇄되지 않은 디지털 문서 파일</sup>는 허용되지 않음, 하드카피<sup
										>물리적으로 인쇄된 문서</sup
									>는 앞, 뒷면 상관 없이 최대 25장 허용</strong
								>
							</li>
						</ul>
					</li>
					<li>
						Division2 참가 자격이 변경되었습니다.
						<ul>
							<li>
								정보통신대학 및 소프트웨어융합대학 재학생을 제외한 모든 재학생 ⇒ <strong
									>정보통신대학 및 소프트웨어융합대학 재학생을 제외한 모든 재학생 및 정보통신대학 및
									소프트웨어융합대학 1학년 재학생</strong
								>
							</li>
							<li>
								예시:
								<ul>
									<li>소프트웨어학과 3, 4학년: Div1에만 참여 가능</li>
									<li>사이버보안학과 1학년: Div1, 2 모두 참여 가능</li>
									<li>e-비즈니스학과 N학년: Div1, 2 모두 참여 가능</li>
								</ul>
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<section class="" id="about">
	<div class="container">
		<div class="row my-7">
			<div class="col-md-10 offset-md-1">
				<div class="row gy-3">
					<div class="col-md-6">
						<a href="https://forms.gle/vzBvwLbs8CCVXFJZ7" target="_blank" rel="noreferrer">
							<button class="btn btn-ansi-red text-white w-100 p-3">참가 신청</button>
						</a>
					</div>
					<div class="col-md-6">
						<a href="https://www.acmicpc.net/category/408" target="_blank" rel="noreferrer">
							<button class="btn btn-ansi-cyan text-white w-100 p-3">기출 문제</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="" id="about">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>대회 소개</h1>
				<p>
					<strong>Ajou Programming Contest</strong>는 논리적인 사고로 문제를 해결하는 아주대학교
					교내 프로그래밍 경시대회입니다. 전공 학생들에게는 실력을 검증하고 성장할 수 있는 기회가,
					비전공 학생들에게는 보다 흥미롭게 SW의 가치를 경험하는 기회가 될 것입니다.
				</p>
				<h3>시상 내역</h3>
				<div class="row">
					<div class="col-md-6">
						<h5>Division 1 - Competition Round</h5>
						<p>
							정보통신대학 및 소프트웨어융합대학 소속 학과 재학생 및 보다 높은 수준의 대회에
							참가하고 싶은 아주대학교 재학생이 참여 가능합니다.
						</p>
						<ul>
							<li>대상: 총장상 및 상금 50만원, 아이패드 (1명)</li>
							<li>최우수상: SW중심대학사업단장상 및 상금 30만원 (1명)</li>
							<li>3등 MORAI 특별상: MORAI 후원상 및 상금 25만원 (1명)</li>
							<li>우수상: SW중심대학사업단장상 및 상금 20만원 (2명)</li>
							<li>장려상: SW중심대학사업단장상 및 상금 10만원 (3명)</li>
							<li>추첨상: 기업 후원 상품 (Div1, Div2 포함)</li>
						</ul>
						<p>
							상위 입상자에게 경인지역 6개대학 연합 프로그래밍 경시대회 <a href="{base}/"
								><strong>shake!</strong></a
							> 참가 자격 부여
						</p>
					</div>
					<div class="col-md-6">
						<h5>Division 2 - Challenge Round</h5>
						<p>
							정보통신대학 및 소프트웨어융합대학 소속이 아닌 학과에 속한 모든 아주대학교 재학생 및
							정보통신대학 및 소프트웨어융합대학 소속 1학년 재학생이 참여 가능합니다.
						</p>
						<ul>
							<li>대상: 총장상 및 상금 30만원 (1명)</li>
							<li>최우수상: SW중심대학사업단장상 및 상금 20만원 (1명)</li>
							<li>3등 MORAI 특별상: MORAI 후원상 및 상금 15만원 (1명)</li>
							<li>우수상: SW중심대학사업단장상 및 상금 10만원 (3명)</li>
							<li>추첨상: 기업 후원 상품 (Div1, Div2 포함)</li>
						</ul>
						<p>
							정보통신대학 및 소프트웨어융합대학 소속 학생 중 2학년 이상은 <strong>Division2</strong
							> 참가 불가
						</p>
					</div>
					<p>
						<strong>* 시상 내역은 학과 사정에 따라 변경될 수 있습니다.</strong>
					</p>
					<p>
						<strong
							>* Division 1, Division 2 참가 가능 여부는 "제1전공"을 기준으로 합니다. (학사서비스 ⇒
							학적 기본 조회 ⇒ 전공 ⇒ 제1전공)</strong
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<hr class="my-0" />

<section class="" id="location">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>대회 일정</h1>
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<p>
							<strong>본 대회는 4시간 동안 진행되며, 세부 일정은 아래와 같습니다.</strong>
						</p>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">시간</th>
									<th scope="col">일정</th>
									<th scope="col">장소</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>12:00 ~ 12:30</td>
									<td>대회 개최식 및 지도 교수님 소개</td>
									<td>오프라인</td>
								</tr>
								<tr>
									<td>12:30 ~ 13:20</td>
									<td>후원사 소개 및 홍보세션</td>
									<td>오프라인</td>
								</tr>
								<tr>
									<td>13:20 ~ 14:00</td>
									<td>이동 및 환경점검</td>
									<td>오프라인</td>
								</tr>
								<tr>
									<td><strong>14:00 ~ 18:00</strong></td>
									<td><strong>본대회</strong></td>
									<td><strong>오프라인</strong></td>
								</tr>
								<tr>
									<td>18:00 ~ 19:00</td>
									<td>풀이 및 결과발표</td>
									<td>오프라인</td>
								</tr>
							</tbody>
						</table>
						<p>위 일정은 당일 사정에 따라 조정될 수 있습니다.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<hr class="my-0" />

<section class="" id="location">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>대회 장소</h1>
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<p>
							<strong> 산학협력원 B103호, 422호, 623호 </strong>
						</p>
						<p>
							대회 당일 명찰을 나눠드리면서 개인별로 대회장을 안내해 드릴 예정입니다. 신청 마감 후,
							메일로 다시 한 번 안내사항 전파해 드리겠습니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<hr class="my-0" />

<section class="" id="policies">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h1>대회 규정</h1>
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<h4>대회 참가 자격</h4>
						<ul>
							<li>
								<strong>{year} APC 당일 아주대학교에 소속된 자</strong>
								<ul>
									<li>휴학생은 상금 수령은 불가하나, 시상 및 shake! 출전권 획득은 가능합니다.</li>
								</ul>
							</li>
							<li>
								역대 <a href="https://ucpc.me/" target="_blank" rel="noreferrer"
									>한국 대학생 프로그래밍 경시대회</a
								> 수상자가 아닌 자
							</li>
							<li>
								역대 <a href="https://shake.codes/" target="_blank" rel="noreferrer">shake!</a> 3위 이상
								수상자가 아닌 자
							</li>
							<li>
								역대 <strong>APC Division1</strong> 수상자는 시상에서 제외되며,
								<strong>shake!</strong> 출전권은 획득 가능
							</li>
							<li>
								역대 <strong>APC Division2</strong> 수상자는 <strong>Division1</strong>에만 참가
								가능
							</li>
						</ul>

						<h4>대회 주요 규칙</h4>
						<h5>대회 진행 전</h5>
						<ul>
							<li>APC는 1인 1팀의 <strong>개인전</strong> 형태로 치러집니다.</li>
							<!-- <li><strong>본 대회는 온라인으로 진행되며, 참가자 전원은 대회 시간동안 zoom 어플리케이션을 통해 본인의 모습을 생중계 해야 합니다.</strong><a href="https://drive.google.com/file/d/1aoWj-KhGFc1uaghuiDzoojZ8omad6Imo/view?usp=sharing"> (zoom을 이용한 참가 가이드)</a></li> -->
							<li>
								대회에 사용할 <strong>컴퓨터는 개인 지참</strong>해야 하며, 1인당 1대의 컴퓨터만
								허용합니다.
							</li>
							<li>
								개인 컴퓨터에는 대회 시작 전 컴파일 할 수 있는 환경을 스스로 준비해야 합니다. IDE
								사용에 제한은 없습니다.
								<ul>
									<li>
										단, 온라인 IDE를 사용할 경우 해당 코드가 공개된다면 부정행위로 간주합니다.
									</li>
								</ul>
							</li>
							<li>
								개인 컴퓨터와 마우스, 키보드를 제외한 <strong>모든 전자기기의 사용은 금지</strong
								>됩니다. 마우스와 키보드는 편하신 것으로 지참 가능합니다.
							</li>
							<li>
								소프트 카피<sup>인쇄되지 않은 디지털 문서 파일</sup>는
								<strong>허용되지 않습니다.</strong>
							</li>
							<li>
								하드 카피<sup>물리적으로 인쇄된 문서</sup>는 허용되며 앞, 뒷면 상관 없이
								<strong>최대 25장</strong>
								까지 가능합니다. 사전에 인쇄해서 대회 당일 가져오신 후 스태프에게 검사를 맡은 후 사용해
								주시면 됩니다.
								<ul>
									<li>
										지참 가능한 인쇄물의 예시는 다음 링크에서 참고하실 수 있습니다:
										<a
											href="https://www.acmicpc.net/board/view/21870"
											target="_blank"
											rel="noreferrer">https://www.acmicpc.net/board/view/21870</a
										>
									</li>
								</ul>
							</li>
							<!-- <li>하드카피, 소프트카피는 허용되지 않습니다.</li> -->
							<!-- <li>하드카피, 소프트카피의 사용이 허용됩니다. 단, 하드카피 및 소프트카피 사용 시 참조한 자료 정보의 출처를 주석으로 처리하여 코드에 적어야 합니다.</li> -->
						</ul>
						<h5>대회 진행 중</h5>
						<ul>
							<li>
								타인과 의견을 주고받을 수 있는 <strong>모든 메신저의 사용은 금지</strong>됩니다.
							</li>
							<li>
								대회가 진행되는 동안 타인 간에 의사소통, 자료 공유 등의 모든 행위는 금지됩니다.
							</li>
							<li>
								대회 시작 후 1시간 경과 이전까지는 대회장을 나가실 수 없습니다. 또한 대회장을 나가신
								이후에는 더 이상의 풀이 제출은 하실 수 없습니다.
							</li>
							<li>
								사전에 안내되는 언어 레퍼런스 페이지를 제외한 <strong
									>모든 웹 페이지 접속은 금지</strong
								>됩니다.
							</li>
						</ul>
						<h5>기타</h5>
						<ul>
							<li>
								본인의 아이디와 패스워드를 타인에게 공개하거나 온/오프라인 상에서 공개하는 행위는
								부정행위로 간주합니다.
							</li>
							<li>모든 부정행위자는 실격 처리 되며, 그 결과를 각 학과에 통보합니다.</li>
							<li>
								참가 신청 후 별도의 통보 없이 대회장에 미참석 하는 경우 불이익이 있을 수 있습니다.
								<ul>
									<li>
										만일 피치 못할 사정으로 대회 당일 참석하지 못할 경우 사전에 주관처(<a
											href="mailto:{email}">{email}</a
										>) 혹은 기타 운영진을 통해 연락 부탁드립니다.
									</li>
								</ul>
							</li>
						</ul>

						<h4>대회 진행 방식</h4>
						<ul>
							<li>문제의 모든 지문은 <strong>한국어</strong>로만 제공됩니다.</li>
							<li>참가자는 각 문제에 대한 해답을 작성하는 소스코드를 제출합니다.</li>
							<li>
								사용가능한 프로그래밍 언어는 <strong>C/C++, Java, Python2,3</strong>로 제한됩니다.
								순위 책정에 언어의 종류는 관계가 없습니다.
							</li>
							<li>제출된 소스코드는 시스템에 의해 실시간으로 채점됩니다.</li>
							<li>채점이 완료되면 참가자는 채점 결과를 확인할 수 있습니다.</li>
							<li>
								한 문제는 난이도에 따라 서브태스크로 나뉘며 각 난이도의 문제를 독립적으로
								채점합니다.
							</li>
							<li>제출 횟수에 제한은 없습니다.</li>
							<li>
								대회 중 문제 및 채점에 관한 질문은 대회 진행 페이지의 문의하기 기능을 통해 문의해야
								합니다.
							</li>
							<li>문제와 채점에 관련되지 않은 사항은 대회장에 있는 감독관에게 직접 문의합니다.</li>
							<li>
								대회 중 심각한 오류가 발견된 경우 문제의 수정 및 재채점이 가능하며, 이는 모든
								참가자에게 공지됩니다.
							</li>
						</ul>

						<h4>순위 결정 방식</h4>
						<ul>
							<li>모든 참가자는 실시간 순위를 직접 확인할 수 있습니다.</li>
							<li>모든 부정행위자는 순위에서 제외됩니다.</li>
							<li>
								<strong>Division2 - Challenge Round</strong>와
								<strong>Division1 - Competition Round</strong>는 독립적으로 순위를 적용합니다.
							</li>
							<li>
								모든 참가자는 소속, 학년, 나이, 성별 등 대회 외적인 사항으로 결과에 이익이나
								불이익을 받지 않습니다.
							</li>
							<li>각 참가자는 문제를 풀어 획득한 점수와 패널티를 가집니다.</li>
							<li>
								제출한 답이 해당 문제 최초 정답인 경우, 제출자에게 <strong
									>(대회 경과 시간) + (해당 문제 오답 제출 수 x 20분)</strong
								>의 패널티를 가산합니다.
							</li>
							<li>정답을 맞추지 못한 문제에 대한 패널티는 부가되지 않습니다.</li>
							<li>
								순위는 아래 조건을 순차적으로 적용했을 때, 상위에 있는 조건을 먼저 만족한 참가자가
								더 높은 순위를 가집니다.
							</li>
						</ul>

						<h4>채점 환경</h4>
						<p>
							모든 채점은 <a href="https://startlink.io/">Startlink</a>의
							<a href="https://www.acmicpc.net">백준 온라인 저지</a>
							플랫폼에서 이루어지며, 참가자들은 미리 플랫폼을 이용해볼 수 있습니다.<br />
							언어마다 다른 채점기준이 적용되며, 각 언어별 컴파일 및 실행 옵션, 버전, 채점기준은 아래와
							같습니다.<br />
							C, C++ 에서의 제한은 각 문제에 명시된 제한(기본값) 를 따릅니다.
						</p>
						<table class="table">
							<thead>
								<tr>
									<th>언어</th>
									<th>버전</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>C11</td>
									<td>gcc (GCC) 11.1.0</td>
								</tr>
								<tr>
									<td>C++17</td>
									<td>g++ (GCC) 11.1.0</td>
								</tr>
								<tr>
									<td>Java 8</td>
									<td>Java(TM) SE Runtime Environment (build 1.8.0_201-b09)</td>
								</tr>
								<tr>
									<td>Python3</td>
									<td>Python 3.11.0</td>
								</tr>
								<tr>
									<td>PyPy3</td>
									<td>Python 3.9.12, PyPy 7.3.9 with GCC 10.2.1 20210130 (Red Hat 10.2.1-11)</td>
								</tr>
							</tbody>
						</table>
						<p>
							언어별 예제 등의 자세한 사항은 <a href="https://www.acmicpc.net/help/language">여기</a
							>에서 확인 바랍니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-black text-white" id="policies" style="--bs-bg-opacity: .85;">
	<div class="container py-5">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<div class="row gy-3">
					<div class="col-md-8">
						<p>
							<strong>ABOUT</strong>
						</p>
						<p>
							<strong>APC(Ajou Programming Contest)</strong>는 아주대학교 재학생을 대상으로 진행되는
							교내 프로그래밍 경시대회로서, 프로그래밍을 공부하는 사람들에게 다양한 경험과 기회를
							제공하고 선의의 경쟁을 통해 인재를 발굴하고 함께 발전하는데에 목적을 두고 있습니다.
						</p>
					</div>
					<div class="col-md-4">
						<p>
							<strong>주최</strong>
						</p>
						<p />
						<div style="max-width: 250px; --bs-aspect-ratio: 14%;" class="ratio">
							<a href="https://linc.ajou.ac.kr" target="_blank" rel="noreferrer">
								<img src="{base}/logo-ajou-linc3.0-white.png" alt="LINC 3.0" class="h-100" />
							</a>
						</div>
						<p />
						<div style="max-width: 250px; --bs-aspect-ratio: 14%;" class="ratio">
							<a href="https://sw.ajou.ac.kr/sw/index.do" target="_blank" rel="noreferrer">
								<img src="{base}/logo-ajou-ncesw-white.png" alt="SW중심대학사업단" class="h-100" />
							</a>
						</div>
					</div>
					<div class="col-md-8" />
					<div class="col-md-4">
						<p>
							<strong>주관</strong>
						</p>
						<p>
							<img src="{base}/logo-ansi-white.png" alt="ANSI" width="200px" class="mw-100" />
						</p>
					</div>
					<div class="col-md-8" />
					<div class="col-md-4">
						<p>
							<strong>후원</strong>
						</p>
						<p>
							<a href="https://startlink.io" target="_blank" rel="noreferrer">
								<img
									src="{base}/logo-company-startlink-white.png"
									alt="linc 3.0"
									width="200px"
									class="mw-100"
								/>
							</a>
						</p>
						<p>
							<a href="https://www.dspace.com/ko/kor/home.cfm" target="_blank" rel="noreferrer">
								<img
									src="{base}/logo-company-dspace.png"
									alt="dSPACE"
									width="200px"
									class="mw-100"
								/>
							</a>
						</p>
						<p>
							<a href="https://www.morai.ai/ko" target="_blank" rel="noreferrer">
								<img
									src="{base}/logo-company-morai-white.png"
									alt="MORAI"
									width="200px"
									class="mw-100"
								/>
							</a>
						</p>
						<p>
							<a
								href="https://www.samsungdisplay.com/kor/index.jsp"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="{base}/logo-company-samsungdisplay-white.png"
									alt="Samsung Display"
									width="200px"
									class="mw-100"
								/>
							</a>
						</p>
						<p>
							<a href="https://www.mobis.co.kr/kr/index.do" target="_blank" rel="noreferrer">
								<img
									src="{base}/logo-company-hyundaimobis-white.png"
									alt="Hyundai Mobis"
									width="200px"
									class="mw-100"
								/>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
