# shake-site

경인지역 6개대학 연합 프로그래밍 경시대회 홈페이지입니다.

[SvelteKit](https://kit.svelte.dev)을 이용해 개발되었습니다.

## 프로젝트 구조

```
src/
    lib/
      univs/
        [...]
    routes/
        [svelte pages]
    app.d.ts
    app.html
    style.scss
    additional.d.ts
    apc-data.csv
    shake-data.csv
    universities.csv
```

- `shake-data.csv`
  - 년도별 shake! 대회의 문제 링크, 솔루션 링크, 스코어보드 링크를 담고있습니다.
- `apc-data.csv`
  - 년도별 APC 대회의 문제 링크, 솔루션 링크, 스코어보드 링크를 담고있습니다.
- `lib/univs`
  - shake! 대회에 참가하는 6개 대학의 정보를 담고있습니다.

UI 개발을 위해 [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)을 사용합니다.

- `style.scss`
  - Bootstrap의 커스터마이징을 위한 설정들 및 추가 클래스 정의가 포함되어 있습니다.

## 유지보수

위에서 설명한 파일들을 열어 수정이 필요한 부분만 매년 대회 개최 시 마다 수정하면 됩니다.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
