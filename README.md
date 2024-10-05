# realtime_chat

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

```plaintext
project-root/
├── apps/                        // 애플리케이션 폴더
│   ├── frontend/                // 프론트엔드 애플리케이션
│   │   ├── public/              // 정적 리소스
│   │   ├── src/                 // 소스 코드 파일
│   │   │   ├── assets/              // 이미지, 폰트 등의 정적 리소스
│   │   │   ├── components/          // 재사용 가능한 UI 컴포넌트
│   │   │   ├── pages/               // 주요 페이지
│   │   │   ├── services/              // API 요청 및 비즈니스 로직
│   │   │   ├── styles/                // Tailwind CSS 스타일 파일
│   │   │   ├── App.tsx                // 주요 앱 컴포넌트
│   │   │   └── index.tsx              // 엔트리 포인트
│   │   ├── package.json               // 프론트엔드 의존성 파일
│   │   ├── tailwind.config.js         // Tailwind CSS 설정 파일
│   │   ├── postcss.config.js          // PostCSS 설정 파일
│   │   └── bun.lockb                  // Bun 패키지 락 파일
│   └── backend/                 // 백엔드 애플리케이션
│       ├── controllers/         // API 핸들러 및 비즈니스 로직
│       ├── models/              // Mongoose 스키마 정의
│       ├── routes/              // API 라우팅 설정
│       ├── services/            // 서비스 계층 로직
│       ├── middlewares/         // Express 미들웨어
│       ├── config/              // 데이터베이스 연결 등 설정 파일
│       ├── server.ts            // Express 서버 초기화 및 설정
│       ├── package.json         // 백엔드 의존성 파일
│       └── bun.lockb            // Bun 패키지 락 파일
├── packages/                    // 공통으로 사용하는 패키지 및 코드
│   ├── shared/                  // 프론트엔드와 백엔드에서 공유하는 코드 (DTO, 유틸리티 등)
│   │   ├── dtos/                // 데이터 전송 객체 정의
│   │   └── utils/               // 유틸리티 함수들
│   ├── ui-library/              // 프론트엔드에서 재사용 가능한 컴포넌트 (예: 버튼, 모달 등)
│   └── ...                      // 기타 공유 가능한 모듈
├── turbo.json                   // Terborepo 설정 파일
├── package.json                 // 루트 패키지 파일
└── bun.lockb                    // Bun 의존성 파일
```

HTTP Method Endpoint Description Access
POST /api/auth/register 사용자 회원가입 Public
POST /api/auth/login 사용자 로그인 Public
POST /api/auth/2fa 2단계 인증 코드 제출 Authenticated
GET /api/auth/profile 사용자 프로필 정보 조회 Authenticated
PUT /api/auth/profile 프로필 정보 수정 (이미지 포함) Authenticated
POST /api/auth/reset-password 비밀번호 재설정 링크 요청 Public
PUT /api/auth/reset-password 비밀번호 재설정 완료 Public
